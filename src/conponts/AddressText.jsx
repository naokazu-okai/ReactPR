import React from 'react';
import '../css/AddressText.css'

const addressText = () => {
    return (
        <div>
            <div className="MyProfileText">
                <p>氏名：岡井 直胤 (オカイ　ナオカズ）</p>
                <p>mail：naokazu.okai@force-corp.co.jp</p>
                <p>電話番号：080-9801-3527</p>
                <p>郵便番号：〒338-0812</p>
                <p>住所：埼玉県 さいたま市 桜区神田 395-8</p>
            </div>

            <div className="WorkPlace">
                <p>会社名：フォース株式会社</p>
                <p>電話番号：03-5259-5231</p>
                <p>FAX：03-5259-5320</p>
                <p>郵便番号：〒101-0054</p>
                <p>住所：東京都千代田区神田錦町3丁目18番地寿ビル7F</p>
                <a href="http://force-corp.co.jp/" className="Link">フォースのホームページはここから！</a>
            </div>

            <div className="Shadow1"></div>
            <div className="Shadow2"></div>

            <div className="MyPhoto"></div>
            <div className="Map"></div>
        </div>
    );
}

export default addressText;