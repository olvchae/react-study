

function App() {
    // 요청을 보내는 건 동기 응답이 와서 실행하는 건 비동기
    new Promise((resolve, reject) => {  // new Promise 생성은 동기
        console.log(7);
        if (false) {
            resolve("성공데이터");
        } else {
            reject(new Error("실패데이터"));
        }
        // resolve(); 
        // reject();  // resolve 아니면 reject 중 하나만 가능 (예외처리)
    }).catch((reason) => { // then 안의 함수가 비동기 (resolve 호출 때 큐에 줄을 서게 됨 + resolve가 없으면 실행되지 않음)
        console.log(9);
        console.error(reason);
    })
    .then((value) => {
        console.log(8);
        console.log(value);
    }); // 프로미스 객체 
    //then과 catch가 연결될 수 있는 건 계속 자기 자신 즉 Promise 객체를 리턴해주기 때문에 접근이 가능한 것
    // queue에 then > catch 순으로 들어감 

    new Promise((resolve, reject) => {   
        console.log(10);
        if (true) {
            resolve();
        } else {
            reject();
        }
    }).then(() => {
        console.log(11);
    })
    .catch(() => { 
        console.log(12);
    }); 

    // 먼저 프로미스에서 호출된 애들 순서대로 같은 레벨로 봄


    console.log(1);  //10초
    console.log(2);  //1시간
    console.log(3); //30분
    console.log(4);  //1초

    // 비동기 queue
    setTimeout(() => {
        console.log(5);
    }, 5000);

    setTimeout(() => {
        console.log(6);
    }, 2000);



    return (
        <>
            홈

        </>
    )
}

export default App;