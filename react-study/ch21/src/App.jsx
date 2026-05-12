

function App() {

  const getPromise = (name) => {
    return new Promise((resolve, reject) => {
      console.log("프로미스 생성");
      console.log(name);
      if (!!name) {
        resolve(name + "님");
      } else {
        reject(new Error("이름이 입력되지 않았습니다."));
      }
  })}
  //async (쓰는 이유 = 프로미스 문법 줄이려고 + 비동기 안에서의 동기를 위해서)
  const getPromise2 = async (name) => {  // async 달면 리턴이 프로미스를 리턴하는 함수가 됨 (new Promise 함수를 함축하는 키워드라고 봐도 됨)
      console.log("프로미스 생성");
      console.log(name);
      if (!!name) {
        return name + "님";  //return이 resolve가 됨
      } else {
        throw new Error("이름이 입력되지 않았습니다.");  //throw가 reject가 됨
      }
  }
  
  const handle1 = () => {
    const promise1 =  getPromise("김은채");
    promise1
    .then((name) => {console.log(name + " 환영합니다.")})
    .catch((error) => {console.log(error)});
  }
  const handle2 = () => {
    const promise2 =  getPromise2("박은채");
    promise2
    .then((name) => {console.log(name + " 수고하셨습니다.")})
    .catch((error) => {console.error(error)});
  }
  
  return (
      <>
          <button onClick={handle1}>프로미스 생성1</button>
          <button onClick={handle2}>프로미스 생성2</button>
      </>
  )
}

export default App;