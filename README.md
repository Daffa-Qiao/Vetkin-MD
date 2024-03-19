## VETKIN BOT

<p align="center">

<img src="./image/hd.jpg" alt="ALPHA" width="200"/>
</p>

> **Note**: Saya menggunakan 2 api key yang pertama itu dari Zeeone (https://api.zeeoneofc.my.id) yang kedua itu dari Qyuunee (https://api.koi.pics),dan 
script ini adalah Modifikasi dari script [example case](https://github.com/zeeoneofficial/example-case) dari [Zeeone](https://github.com/zeeoneofficial)
--------
## CARA PASANG APIKEY
1. Pastikan kamu sudah memiliki akun di website [Api Zeeoneofc](https://api.zeeoneofc.my.id/users/login) dan akun di website [Api Qyuune](https://api.qyuunee.my.id/login)
2. Di bagian [Account Setting] salin apikey kamu.
3. Ganti `Your Key` di file `settings.js` dengan apikey kamu.
```ts
// Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.my.id',
	koi: 'https://api.koi.pics',
}

// Apikey
global.APIKeys = {
	'https://api.zeeoneofc.my.id': 'Your Key',
	'https://api.koi.pics':'Your Key',
}
```

> **Warning**: Jika mengganti link REST-API menjadi yang lain maka akan mengganti fitur botnya

--------

## HEROKU BUILDPACK

```
> heroku/nodejs
> https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest
> https://github.com/clhuang/heroku-buildpack-webp-binaries.git
```

--------

## Terimakasih kepada
- Pengguna script ini
- Penyedia package
- Penyedia REST API
- Dan kalian yang telah berdonasi
