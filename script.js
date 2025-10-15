const CORRECT_USERNAME = "admin";
const CORRECT_PASSWORD = "moyuseka0222";
// -----------------------------------------

const form = document.getElementById('login-form');

form.addEventListener('submit', function(event) {
    // フォームのデフォルトの送信動作をキャンセル
    event.preventDefault(); 
    
    // 入力された値を取得
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // ユーザー名とパスワードが正しいかチェック
    if (username === CORRECT_USERNAME && password === CORRECT_PASSWORD) {
        // 正しければhome.htmlに移動
        window.location.href = 'home.html';
    } else {
        // 間違っていればアラートを表示
        alert('ユーザー名またはパスワードが間違っています。');
    }
});
