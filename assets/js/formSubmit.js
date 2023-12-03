document
  .querySelector(".php-email-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    fetch(e.target.action, {
      method: e.target.method,
      body: new FormData(e.target), // フォームのデータを取得
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        alert("メッセージが送信されました。ありがとうございます。"); // 送信成功時のメッセージ
        e.target.reset(); // フォームのリセット
      })
      .catch((error) => {
        alert("メッセージが送信されました。ありがとうございます。"); // 送信成功時のメッセージ
        e.target.reset(); // フォームのリセット
      });
  });
