import React from 'react';
import '../css/CharacterText.css';

const characterText = () =>{
    return (
        <div>
            <div className="MeritText">
                <h2>長所</h2>
                <p>・心理学部出身なので、心の相談事を受けるのが得意</p>
                <p>・学部柄、人とコミュニケーションをして来たので、人並にコミュニケーションがとれる</p>
                <h3>縁の下の力持ち</h3>
                <p>・アルバイトで裏方の仕事をしていた経験上、準備や補助をしていた。</p>
                <p>・課題や取り組みを行う際に、課題や取り組みで「簡単・便利」になると感じたものを＋αで付け加える事をする。</p>
            </div>

            <div className="DemeritText">
                <h2>短所</h2>
                <p>・人の助けになりたいと張りきり、余計なお世話をしてしまう事がある</p>
                <p>・早とちりな行動を稀に起こしてしまう</p>
                <p>・IT知識の不足</p>
                <p>・社会人としてのマナーがおぼつかない</p>
            </div>

            <div className="MeritImg"></div>
            <div className="DemeritImg"></div>
        </div>
    );
}

export default characterText;