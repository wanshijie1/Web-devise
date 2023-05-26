<?php
// 设置验证码图片的宽度和高度
$width = 120;
$height = 40;

// 创建一个空白的验证码图片
$image = imagecreatetruecolor($width, $height);

// 设置背景色和文本颜色
$bgColor = imagecolorallocate($image, 255, 255, 255);
$textColor = imagecolorallocate($image, 0, 0, 0);

// 填充背景色
imagefilledrectangle($image, 0, 0, $width, $height, $bgColor);

// 生成随机的验证码数字
$code = rand(1000, 9999);

// 在验证码图片上绘制文本
$font = 'path/to/your/font.ttf';  // 替换为您的字体文件路径
imagettftext($image, 20, 0, 20, 30, $textColor, $font, $code);

// 设置响应头信息，指定输出的是图像
header('Content-Type: image/png');

// 输出验证码图片
imagepng($image);

// 释放图像资源
imagedestroy($image);
?>
