# README

# Model - Controller
```
rails generate model Language --skip-migration
rails generate model Glossary --skip-migration
rails generate model Navigation --skip-migration
rails generate model Article --skip-migration
rails generate model Type --skip-migration
rails generate model Qualification image:references --skip-migration
rails generate model Contact --skip-migration
```

```
rails generate controller Home index --skip-routes -T
rails generate controller Company index --skip-routes -T
rails generate controller Article index --skip-routes -T
rails generate controller About --skip-routes -T
rails generate controller Contact --skip-routes -T
```


# non-standard issues

### Generate name
```
rails generate model Statu --skip-migration
```

in config/initializers/inflections.rb
```
ActiveSupport::Inflector.inflections(:en) do |inflect|
  inflect.irregular 'statu', 'status'
end
```

### Action name
"notice" name is not available.    
but "notices" name is available.



## Custom CSS
  The first step is to create a css; for example:    
```
app/assets/stylesheets/app.css
```

  then add asset name to rails pipeline by editing app/assets/config/manifest.js file with line:    
```
//= app.css
```

  Last step is to apply the styles into the application layout by editing the application.html.erb file and add below line:
```
<%= stylesheet_link_tag "app", "data-turbo-track": "reload" %>
```

### open precompile
edit config/initializers/assets.rb:
```
Rails.application.config.assets.precompile += %w( app.css )
```
then exec:
```
rake tmp:clear
rake assets:precompile
```

- [Rails 6.1 raises an error for impossible camelcase inflections](https://www.bigbinary.com/blog/rails-6-1-raises-error-for-impossible-camelcase-inflections)
- [Rails Generate Model not using inflection rule](https://stackoverflow.com/q/44354541)
- [Asset was not declared to be precompiled in production](https://unity-yuji.xyz/asset-was-not-declared-to-be-precompiled-in-production/)
- [how to display content with raw html](https://stackoverflow.com/a/4052936)
- [Rails Actions > Common view?](https://stackoverflow.com/questions/9259483/rails-actions-common-view)
- [render layout](https://guides.rubyonrails.org/layouts_and_rendering.html#using-partials)
