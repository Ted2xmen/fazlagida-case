# Case 

Storybook Linki :  https://fazlagida-case-jz8l.vercel.app

Production Preview : https://fazlagida-case.vercel.app/

Github Task : https://github.com/users/Ted2xmen/projects/5


## Boilerplate

create-react-app ile başlattığım projeye routerv6, tailwindcss, storybook ve react-query gibi teknolojileri dahil ettim. Kendi boilerplate kodlarım olsa da baştan hazırlamak istedim. State management için reduxtoolkit'i de dahil ettim. Zaman durumuna göre belki data'yı store üzerinden dağıtmayı deneyebilirim. Eslint ve prettier gibi kod iyileştirme araçlarını, yaptıkları pekçok şeyi Vscode ile halledebiliyor olmamdan ötürü dahil etmedim.

Diğer paketler;
- react-intersection-observer
- chromatic (storybook'u paylaşmamızı sağlıyor ancak ben vercel'i tercih ettim. )
- axios
- react-helmet
- react-query devtools

## Tailwind & Storybook

- Tailwind'i tasarımın anlaşılabilirliğinin yeterli görülmesi sebebiyle seçtim. Test yazmaya daha çok zaman kalsın istedim. 

- Son zamanlarda sıkça kullansam da storybook ile birlikte kullanmamıştım. Css kodlarını storybook'un yorumlamaması problemini, storybook/preview dosyasına tailwind'in işlediği dosyayı import ederek çözdüm.

- Storybook'u daha önce sadece deneme amaçlı Next js ve styledcomponents ile birlikte kullanmıştım.

- Zaman durumuna göre index.css dosyasındaki class isimleri belki BEM metoduyla yeniden düzenlenebilir

## React-query 

Bu teknolojiyi 101 seviyesinde bilsem de daha önce hiç kullanmamıştım. Öğrenirken dokümantasyondan ve codevolution adlı youtube kanalındaki tutorial'dan faydalandım. 


### Cache 
Cache'lemeyi kolayca halletsem de multiple query gerektiren "details" sayfası zamanımı aldı. Buradaki sorunları da şu aşağıdaki iki kaynak ve dökümantasyon sayesinde çözdüm. 

- https://stackoverflow.com/questions/70630491/how-to-get-usequeries-to-only-fetch-once 

- https://stackoverflow.com/questions/66427968/how-to-handle-multiple-queries-with-react-query

Hem anasayfadaki hem de toptracks ve topalbums kısmındaki data'ları cache'lemeyi başardım. 

> Query'leri custom hook olarak da hazırladım ve tek olarak çalışır hale getirdim. Ancak multiple query'ler olarak kullanabilmek için ekstra çaba gerektirdiğinden kullanmadım.  

### Infinite loading

React-query'nin dokümantasyonundaki örneğe dayanarak gerçekleştirdim. react-intersection-observer ile sayfa sonuna indikçe yeni verileri yüklemesi yerine bir buton koymayı tercih ettim. Ama gereken kodu da yorum satırıyla bıraktım. 

Karşılaştığım problem pageparams'ın undefined dönmesiydi. Aşağıdaki linkteki örneğe bakarak sorunu çözdüm. 

- https://blog.openreplay.com/infinite-scrolling-with-react-query/

Diğer kaynaklar;

- https://tanstack.com/query/v4/docs/examples/react/load-more-infinite-scroll

- https://blog.logrocket.com/pagination-infinite-scroll-react-query-v3/

- https://stackoverflow.com/questions/72633199/react-query-infinite-scroll-pageparams-is-undefined

- https://stackoverflow.com/questions/72454343/react-query-parameters-are-empty-on-page-load


