import { Link, useNavigate } from 'react-router';
import './new.css';

const New = () => {
  const navigate = useNavigate();
  const url = "https://railway.bulletinboard.techtrain.dev/threads";

  const onCreateThread = () => {
    const title = document.getElementById("title").value;
    const body = {'title': title};
    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });

    // 作成が完了したら、値を消して一覧画面へ戻る。
    document.getElementById("title").value = "";
    navigate("../");
    alert("投稿が完了しました。");
  }
    return (
      <>
        <h1>スレッド新規作成</h1>
        <div className="form-new">
          <div className="input-group-new">
            <p>スレッドタイトル</p>
            <input type="text" id="title"></input>
          </div>
          <div className="button-group-new">
            <Link to="../" className="back-link">一覧画面へ戻る</Link>
            <button onClick={onCreateThread}>作成</button>
          </div>
        </div>
      </>
    );
  };
  
  export default New;