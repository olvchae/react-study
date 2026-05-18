import MDEditor from "@uiw/react-md-editor";
import Header from "../../components/Header/Header";
import * as s from "./styles";
import { useEffect, useState } from "react";
import TextInput from "../../components/TextInput/TextInput";
import { BiImageAdd } from "react-icons/bi";
import Button from "../../components/Button/Button";
import Select from "react-select";
import { BsAirplane } from "react-icons/bs";
import { PiPaperPlaneTiltLight } from "react-icons/pi";
import { useAuthentication } from "../../hooks/queries/useAuthentication";
import { Navigate, replace, useNavigate } from "react-router";

function PostRegister() {
  const navigate = useNavigate();
  const authentication = useAuthentication(localStorage.getItem("accessToken"));
  const [ interval, setInterval ] = useState({
    file: null,
    dataUrl: null,
  })
  const [title, setTitle ] = useState("");
  const [ value, setValue ] = useState("");

  const [ thumbnail, setThumbnail ] = useState({
    file: null,
    dataUrl: null,
  });

  const [ category, setCategory ] = useState('common');

  const options = [
    { value: 'common', label: '일반게시글' },
    { value: 'backend', label: 'Backend' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'database', label: 'Database' },
  ];

  const readFilDataUrl = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        resolve(e.target.result);
      }
      fileReader.readAsDataURL(file);
    });
  }

  const handleTitleOnChange = (e) => {
    setTitle(e.target.value);
  }

  const handleThumbnailOnClick = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");

    input.onchange = (e) => {
      const files = Array.from(e.target.files);
      readFilDataUrl(files[0])
      .then((dataUrl) => {
        setThumbnail(prev => ({
          file: files[0],
          dataUrl: dataUrl,
        }))
      })
    }
    input.click();
  }

  const handleCategoryOnChange = (option) => {
    setCategory(option.value);
  }

  const handleTempSaveOnclick = () => {
    const tempPost = {
      "title": title,
      "content": value,
      "thumbnail": thumbnail,
      "category": category,
    }
    localStorage.setItem("tempPost", JSON.stringify(tempPost));
    alert("게시글이 임시저장 되었습니다.");
  }

  const handleSubmitOnClick = () => {
    let posts = JSON.parse(localStorage.getItem("posts"));
    posts = posts ?? [];
    const ids = posts.map(post => post.id);
    const newId = Math.max(...ids, 0) + 1; 
    const newPost = {
      "id": newId,
      "title": title,
      "content": value,
      "thumbnail": thumbnail,
      "category": category,
      "postingDate": new Date(),
      "user": authentication.data.data,
    }
    posts = [...posts, newPost];
    console.log(posts);
    localStorage.setItem("posts", JSON.stringify(posts));
    alert("발행이 완료되었습니다.");
    clearInterval(interval);
    localStorage.removeItem("tempPost");
    navigate("/", {
      replace: true,
    });
  }

  useEffect(() => {
    const tempPostJson = localStorage.getItem("tempPost");
    if (!!tempPostJson) {
      const tempPost = JSON.parse(tempPostJson);
      setTitle(tempPost.title);
      setValue(tempPost.content);
      setThumbnail(tempPost.thumbnail);
      setCategory(tempPost.category);
    }
  }, []);

  useEffect(() => {
    const itv = setInterval(() => {
        const tempPost = {
          "title": title,
          "content": value,
          "thumbnail": thumbnail,
          "category": category,
        }
        localStorage.setItem("tempPost", JSON.stringify(tempPost));
    }, 5000);
    setInterval(itv);
    return () => {
      clearInterval(itv);
    }
  }, [title, value, thumbnail, category]);

  return (
      <div css={s.wrap}>
        <Header />
        <div css={s.layout}>
          <main css={s.main}>
            <div css={s.titleInput}>
              <TextInput placeholder={"작성하실 글의 제목을 입력해주세요."} value={title} onChange={handleTitleOnChange}/>
            </div>
            <MDEditor
              value={value}
              onChange={setValue}
              data-color-mode="light"
              height={"500px"}
              css={s.editor}
            />
          </main>
          <aside css={s.sidebar}>
            <div css={s.thumbnail(thumbnail.dataUrl)}>
              <label>썸네일</label>
              <div onClick={handleThumbnailOnClick}>
                {
                  ! thumbnail.dataUrl &&
                  <>
                    <BiImageAdd />
                    <p>이미지 업로드</p>
                  </>

                }
              </div>
              <Button onClick={() => {setThumbnail({file: null, dataUrl: null})}}>썸네일 삭제</Button>
            </div>
            <div css={s.categories}>
              <label>카테고리</label>
              <Select options={options} 
              defaultValue={options[0]} 
              value={options.find(opton => options.value === category)} 
              onChange={handleCategoryOnChange}/>
            </div>
            <div css={s.submitButtonGroup}>
              <Button onClick={handleTempSaveOnclick}>임시저장</Button>
              <Button onClick={handleSubmitOnClick}><PiPaperPlaneTiltLight />발행하기</Button>
            </div>
          </aside>
        </div>
      </div>
  )
}

export default PostRegister