import React from 'react';
import '../css/CareerText.css';
const CareerText = () => {
    return (
        <div>
            <div className = 'schoolText' >
                <h2>大学は大正大学</h2>
                <h3>学科は臨床心理学科</h3>
                <p>大学で主に学んだのが臨床心理学科でした。</p>
                <p>臨床心理は、心を治す・癒す学問です。</p>
                <p>この学問を通して、人の心の相談事を聴けるようになったり、</p>
                <p>人の話を聞くのが得意になりました。</p>
            </div>
            <div className = 'circleText'>
                <h2>旅行サークルに所属！</h2>
                <h3>サークルで1年生担当の幹部</h3>
                <p>所属をしていたサークルは旅をする「旅行サークル」でした。</p>
                <p>月に1度のペースで鎌倉や横須賀、シーズンによっては花見やBQをしました。</p>
                <p>私は、そのサークルで１年生の世話をする役職で、1年生のまとめ役を仰せつかってました。</p>
                <p>例えば、1年生だけの旅行を計画し、その旅行を通じて1年生同士の仲を深めるという活動を行いました。</p>
            </div>
            <div className = 'schoolImg'></div>
            <div className = 'sircleImg'></div>
            <div className = 'shadow1'></div>
            <div className = 'shadow2'></div>
        </div>
    ); 
}

export default CareerText;