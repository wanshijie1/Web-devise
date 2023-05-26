<?php
// 假设数据库连接参数
$servername = "121.4.118.243";
$username = "root";
$password = "2220685294Zx!";
$dbname = "loigin_account";

// 创建数据库连接
$conn = new mysqli($servername, $username, $password, $dbname);

// 检查数据库连接是否成功
if ($conn->connect_error) {
  die("数据库连接失败: " . $conn->connect_error);
}

// 处理登录表单提交
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $username = $_POST["username"];
  $password = $_POST["password"];

  // 使用预处理语句来防止 SQL 注入攻击
  $stmt = $conn->prepare("SELECT * FROM users WHERE username = ?");
  $stmt->bind_param("s", $username);
  $stmt->execute();
  $result = $stmt->get_result();

  // 检查用户名和密码是否匹配
  if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    if (password_verify($password, $row["password"])) {
      // 登录验证成功
      // 在这里可以执行登录后的操作，比如设置登录状态、重定向到其他页面等
        header("Location: http://www.wantt.love");// 重定向到页面

      exit(); // 确保后续代码不会执行
    }
  }

  // 登录验证失败
  // 在这里处理登录失败的情况，比如显示错误消息、重定向到登录页面等
  header("Location: login.php"); // 重定向回登录页面
  exit(); // 确保后续代码不会执行
}

// 关闭数据库连接
$conn->close();
?>










