import React, {useState, useEffect} from 'react'
import tabjson from './json/tab.json'

function App() {
    const [tabnm, setTabnm] = useState("notice");

    useEffect(()=>{
        const buttons = document.querySelectorAll('.tabs button');
        // 어레이형 데이터(정렬형 데이터) forEach가능 map불가능
        let currentIndex = 0;

        const switchTab = () => {
            buttons[currentIndex].click();
            currentIndex = (currentIndex + 1) % buttons.length;
        };
        const interval = setInterval(switchTab, 3000);

        // 이 컴퍼넌트가 삭제될때 실행
        return () => clearInterval(interval); 
        // true false를 리턴
        
    }, [])
    
    return (
        <div className="tabwrap d-flex container border">
            <ul className="tabs border">
                <li><button onClick={()=>{setTabnm('notice')}}>{tabjson["notice"]["title"]}</button></li>
                <li><button onClick={()=>{setTabnm('gallery')}}>{tabjson["gallery"]["title"]}</button></li>
                <li><button onClick={()=>{setTabnm('qna')}}>{tabjson["qna"]["title"]}</button></li>
            </ul>
            <div className="content col border">
                <ul>
                {
                    tabjson[tabnm]["content"].map((v, i)=>{
                        return(
                            <li key={`list${i}`}>
                                {
                                    v.split('|').map((vv, ii)=>{
                                        return(
                                                // ii === 0 && <h2>{vv}</h2>
                                                ii === 0 ? <h2>{vv}</h2> : <p>{vv}</p>
                                        )
                                    })
                                }
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        </div>
    )
}

export default App
