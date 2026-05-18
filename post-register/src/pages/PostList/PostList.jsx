import * as s from "./styles";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import TextInput from "../../components/TextInput/TextInput";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { usePosts } from "../../hooks/queries/usePosts";
import { useState } from "react";

function PostList() {
    const [ page, setPage ] = useState(1);
    const posts = usePosts(page, 4);

    const handlePageOnClick = (e) => {
        setPage(parseInt(e.target.value));
    }

  return (
      <div>
          <Header />
          <main>
                <article css={s.topPosting}>

                </article>
                <div css={s.searchContainer}>
                    <TextInput />
                    <Button>검색</Button>
                </div>
                <ul css={s.postListContainer}>
                    {
                        posts.isLoading ? <></> : posts.data.map(post => (
                            <li key={post.id} css={s.card}>
                                <header css={s.cardThumbnail(post.thumbnail.dataUrl)}></header>
                                <div>{post.content}</div>
                                <footer></footer>
                            </li>
                        ))
                    }
                </ul>
                <div css={s.pagination}>
                    <Button><FiChevronLeft /></Button>
                    <Button value={1} onClick={handlePageOnClick}>1</Button>
                    <Button value={2} onClick={handlePageOnClick}>2</Button>
                    <Button value={3} onClick={handlePageOnClick}>3</Button>
                    <Button value={4} onClick={handlePageOnClick}>4</Button>
                    <Button value={5} onClick={handlePageOnClick}>5</Button>
                    <Button><FiChevronRight /></Button>
                </div>
          </main>
      </div>
  )
}

export default PostList