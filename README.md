# <img src="image/../src/images/logo.png" width="30" height="29"> Ice Cream ![GitHub last commit](https://img.shields.io/github/last-commit/in-love-with-anime/ice-cream?color=crimson) ![GitHub watchers](https://img.shields.io/github/watchers/in-love-with-anime/ice-cream?label=watchers&logoColor=crimson&style=social) ![GitHub contributors](https://img.shields.io/github/contributors/in-love-with-anime/ice-cream?color=fb607f)
The First team project html/css


## Team

:ice_cream: teamlead [Valeriia Bielorus](https://github.com/in-love-with-anime)    
:ice_cream: scrum-master [Igor Teslenko](https://github.com/TeslaIh)  
:ice_cream: developer [Dmytro Kalistratov](https://github.com/Dmytro-Kalistratov)  
:ice_cream: developer [Nikolai Romanchenko](https://github.com/romanchenko2804)   
:ice_cream: developer [Mykhailo Sydorchuk](https://github.com/Mihailoolegovich)   
:ice_cream: developer [Alexander Tsaplev](https://github.com/ALEX321616)   
:ice_cream: developer [Dmitrii Shapovalov](https://github.com/Kronord)   
:ice_cream: developer [Artur Kandyba](https://github.com/ArturKandyba)


## Technologies in the project

1. Change the default text selection

```css 
body::selection {
    color: $text-secondary;
    background-color: $pink;
 }
```
2. Change the default color of autocomplete forms

```css
input:-webkit-autofill {
    box-shadow: 0 0 0 30px #pink inset !important;
}
```
3. Smooth scroll to anchor links
```js
$(document).ready(function() {
  $('a.scrollto').click(function(event) {
    elementClick = $(this).attr('href');
    destination = $(elementClick).offset().top;
    $('html:not(:animated),body:not(:animated)').animate({ scrollTop: destination }, 1100);
    return event;
  });
});
```

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :blush:

## Thankfulness
+ [Alexander Repeta](https://github.com/luxplanjay) for the knowledge
+ [ Hryhorii Chernysh](h.chernysh@goit.ua) for the support
