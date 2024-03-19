## VETKIN BOT

<p align="center">

<img src="https://i.ibb.co/sHv87rB/favicon.png" alt="ALPHA" width="200"/>
</p>

> **Note**: Saya menggunakan 2 api key yang pertama itu dari Zeeone (https://api.zeeoneofc.my.id) yang kedua itu dari Qyuunee (https://api.koi.pics),
--------
## CARA PASANG APIKEY
1. Pastikan kamu sudah memiliki akun di website [Api Zeeoneofc](https://api.zeeoneofc.my.id/users/login)
2. Di bagian [Account Setting](https://api.zeeoneofc.my.id/account-settings) salin apikey kamu.
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

> **Warning**: Jangan ganti link [https://api.zeeoneofc.my.id](https://api.zeeoneofc.my.id) karena itu adalah link apikey yang akan digunakan untuk fitur bot ini. 

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
