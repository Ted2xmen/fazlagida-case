# Case 

Storybook Linki : 

Production Preview : 

Github Task : 


## Boilerplate

create-react-app ile başlattığım projeye routerv6, tailwindcss, storybook ve react-query gibi teknolojileri dahil ettim. Kendi boilerplate kodlarım olsa da baştan hazırlamak istedim. 

## Tailwind & Storybook

- Tailwind'i tasarımın anlaşılabilirliğinin yeterli görülmesi sebebiyle seçtim. Test yazmaya daha çok zaman kalsın istedim. 

- Son zamanlarda sıkça kullansam da storybook ile birlikte kullanmamıştım. Css kodlarını storybook'un yorumlamaması problemini, storybook/preview dosyasına tailwind'in işlediği dosyayı import ederek çözdüm.

- Storybook'u daha önce sadece deneme amaçlı Next js ve styledcomponents ile birlikte kullanmıştım.

- 

## React-query 

Bu teknolojiyi 101 seviyesinde bilsem de daha önce hiç kullanmamıştım. Codevolution adlı youtube kanalındaki tutorial'dan faydalandım. 

### Cache 
Cache'lemeyi kolayca halletsem de multiple query gerektiren "details" sayfası zamanımı aldı. Buradaki sorunları da şu aşağıdaki iki kaynak ve dökümantasyon sayesinde çözdüm. 

- https://stackoverflow.com/questions/70630491/how-to-get-usequeries-to-only-fetch-once 

- https://stackoverflow.com/questions/66427968/how-to-handle-multiple-queries-with-react-query

Hem anasayfadaki hem de toptracks ve topalbums kısmındaki data'ları cache'lemeyi başardım. 

<!-- > Query'leri custom hook olarak da hazırladım ve tek olarak çalışır hale getirdim. Ancak multiple query'ler olarak kullanabilmek için ekstra çaba gerektirdiğinden kullanmadım.  -->

### Infinite loading




