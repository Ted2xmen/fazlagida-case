# Case 

Storybook :  https://fazlagida-case-jz8l.vercel.app

Production : https://fazlagida-case.vercel.app/

Repository : https://github.com/Ted2xmen/fazlagida-case

Github Task : https://github.com/users/Ted2xmen/projects/5

## Lastfm API 

Bazı endpointlerde görsel gelmiyor. Bu nedenle sadece details sayfasındaki albümlerin görseli var.
- https://stackoverflow.com/questions/55978243/last-fm-api-returns-same-white-star-image-for-all-artists

## Boilerplate

create-react-app ile başlattığım projeye routerv6, tailwindcss, storybook ve react-query gibi teknolojileri dahil ettim. Kendi boilerplate kodlarım olsa da baştan hazırlamak istedim. State management için reduxtoolkit'i de dahil ettim. 

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

- Zaman durumuna göre index.css dosyasındaki class isimleri !belki BEM metoduyla yeniden düzenlenebilir

###  Dark Mode

Dark ve light mode arasındaki geçişleri tamamladım. 

- Sonra çözmek için bir bug tespit ettim. Site ilk kez açıldığında localstorage'da veri olmadığı için butona ikinci kez basıldıgında geçişleri gerçekleştiriyor. Bunu da sanırım site ilk kez açılır açılmaz localstorage'a default veri ekleyerek çözebilirim.

## React-query 

Bu teknolojiyi 101 seviyesinde bilsem de daha önce hiç kullanmamıştım. Öğrenirken dokümantasyondan ve codevolution adlı youtube kanalındaki tutorial'dan faydalandım. 


### Cache 
Cache'lemeyi kolayca halletsem de multiple query gerektiren "details" sayfası zamanımı aldı. Buradaki sorunları da şu aşağıdaki iki kaynak ve dokümantasyon sayesinde çözdüm. 

- https://stackoverflow.com/questions/70630491/how-to-get-usequeries-to-only-fetch-once 

- https://stackoverflow.com/questions/66427968/how-to-handle-multiple-queries-with-react-query

Hem anasayfadaki hem de toptracks ve topalbums kısmındaki data'ları cache'lemeyi başardım. 

> Query'leri custom hook olarak da hazırladım ve tek olarak çalışır hale getirdim. Ancak multiple query'ler olarak kullanabilmek için ekstra çaba gerektirdiğinden kullanmadım.  

### Infinite loading

React-query'nin dokümantasyonundaki örneğe dayanarak gerçekleştirdim. react-intersection-observer ile sayfa sonuna indikçe yeni verileri yüklemesi yerine bir buton koymayı tercih ettim. Ama gereken kodu da yorum satırıyla bıraktım. 

Karşılaştığım ve sanırım sıkça karşılaşılan problem pageparams'ın undefined dönmesiydi. Aşağıdaki linkteki örneğe bakarak sorunu çözdüm. 

- https://blog.openreplay.com/infinite-scrolling-with-react-query/

faydalandığım diğer kaynaklar;

- https://tanstack.com/query/v4/docs/examples/react/load-more-infinite-scroll

- https://blog.logrocket.com/pagination-infinite-scroll-react-query-v3/

- https://stackoverflow.com/questions/72633199/react-query-infinite-scroll-pageparams-is-undefined

- https://stackoverflow.com/questions/72454343/react-query-parameters-are-empty-on-page-load


# Testing

Öncelikle test için gerekli configurasyon ayarlarını yaptım. Testi, src/components/shared klasörü içindekilerle sınırladım. Buradaki componentler aynı zamanda storybook üzerinde geliştirdiğim componentler. Aşama aşama test etmek için bu sınırlamayı yaptım. Ayrıca ilk kez test yazıyorum ve  öğrendikçe ilerliyorum. Full coverage'a ulaşabilirdim ama bu zaman alır. Deadline'ı fazla uzatmamak için burada bırakıyorum.

- https://jestjs.io/docs/using-matchers

- https://github.com/testing-library/jest-dom

- https://robertmarshall.dev/blog/react-component-props-passed-to-child-jest-unit-test/

- Testing Conditional Render In React https://www.youtube.com/watch?v=To2PzUT1lQ4

File         | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-------------|---------|----------|---------|---------|-------------------
All files    |   79.59 |    66.66 |     100 |   79.59 |                   
 Badge       |      60 |    28.57 |     100 |      60 |                   
  Badge.jsx  |      60 |    28.57 |     100 |      60 | 11-13,19          
 Button      |     100 |      100 |     100 |     100 |                   
  Button.jsx |     100 |      100 |     100 |     100 |                   
 Card        |   66.66 |    61.53 |     100 |   66.66 |                   
  Card.jsx   |   66.66 |    61.53 |     100 |   66.66 | 26-30             
 Title       |   88.88 |     87.5 |     100 |   88.88 |                   
  Title.jsx  |   88.88 |     87.5 |     100 |   88.88 | 29-30  

  ## todo

- Anasayfada aşağılara inip bir sanatçının detaylarına tıkladığımızda "details" sayfası en aşağıdan başlıyor. Bunu details sayfasını en yukarıda açtırarak çözebiliriz. (react-intersection-observer)
- Tailwind.config dosyasını özelleştirmedim ama burada, standardı sağlamak adına, özel boşluklar, renkler, kalıp efektler vb özellikler ekleyebilirdik. 