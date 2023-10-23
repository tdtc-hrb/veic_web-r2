update
====

About [mysql2](https://stackoverflow.com/a/45474878):
```
An error occurred while installing mysql2 (0.5.5), and Bundler cannot continue.
```
install dependeny:
```
sudo apt install mysql-client libmysqlclient-dev
```

### Step 1
At your Gemfile, replace the current version with the aiming version. 
Then run the command below at your root code repository: 
```
bundle update
```
- info
```
Fetching gem metadata from https://rubygems.org/...........
Resolving dependencies...
Using rake 13.0.6
Using base64 0.1.1
Using bigdecimal 3.1.4
Using connection_pool 2.4.1
Using ruby2_keywords 0.0.5
Using minitest 5.20.0 (was 5.18.0)
Using concurrent-ruby 1.2.2
Using builder 3.2.4
Using erubi 1.12.0
Using mutex_m 0.1.2
Using crass 1.0.6
Using rack 3.0.8 (was 2.2.7)
Using nio4r 2.5.9
Using racc 1.7.1 (was 1.6.2)
Using zeitwerk 2.6.12 (was 2.6.8)
Using websocket-extensions 0.1.5
Using timeout 0.4.0 (was 0.3.2)
Using marcel 1.0.2
Using mini_mime 1.1.5 (was 1.1.2)
Using date 3.3.3
Using public_suffix 5.0.3 (was 5.0.1)
Using bindex 0.8.1
Using msgpack 1.7.2 (was 1.7.1)
Using bundler 2.4.10
Using matrix 0.4.2
Using regexp_parser 2.8.2 (was 2.8.0)
Using stringio 3.0.8
Using io-console 0.6.0
Using webrick 1.8.1
Using thor 1.3.0 (was 1.2.2)
Using rexml 3.2.6 (was 3.2.5)
Using rubyzip 2.3.2
Using websocket 1.2.10 (was 1.2.9)
Using drb 2.1.1
Using i18n 1.14.1
Using tzinfo 2.0.6
Using rack-session 2.0.0
Using rack-test 2.1.0
Using puma 5.6.7 (was 5.6.5)
Using sprockets 4.2.1 (was 4.2.0)
Using nokogiri 1.15.4 (x86_64-linux) (was 1.15.2)
Using websocket-driver 0.7.6 (was 0.7.5)
Using net-protocol 0.2.1
Using addressable 2.8.5 (was 2.8.4)
Using bootsnap 1.16.0
Using psych 5.1.1.1
Using reline 0.3.9 (was 0.3.5)
Using rackup 2.1.0
Using activesupport 7.1.1 (was 7.0.5)
Using selenium-webdriver 4.10.0 (was 4.9.1)
Using loofah 2.21.4 (was 2.21.3)
Using net-imap 0.4.2 (was 0.3.4)
Using net-pop 0.1.2
Using net-smtp 0.4.0 (was 0.3.3)
Using xpath 3.2.0
Using rdoc 6.5.0
Using rails-dom-testing 2.2.0 (was 2.0.3)
Using globalid 1.2.1 (was 1.1.0)
Using activemodel 7.1.1 (was 7.0.5)
Installing mysql2 0.5.5 with native extensions
Using webdrivers 5.3.1 (was 5.2.0)
Using rails-html-sanitizer 1.6.0
Using mail 2.8.1
Using capybara 3.39.2 (was 3.39.1)
Using irb 1.8.3 (was 1.7.0)
Using activejob 7.1.1 (was 7.0.5)
Using activerecord 7.1.1 (was 7.0.5)
Using actionview 7.1.1 (was 7.0.5)
Using debug 1.8.0
Using actionpack 7.1.1 (was 7.0.5)
Using jbuilder 2.11.5
Using actioncable 7.1.1 (was 7.0.5)
Using activestorage 7.1.1 (was 7.0.5)
Using actionmailer 7.1.1 (was 7.0.5)
Using railties 7.1.1 (was 7.0.5)
Using sprockets-rails 3.4.2
Using actionmailbox 7.1.1 (was 7.0.5)
Using actiontext 7.1.1 (was 7.0.5)
Using cssbundling-rails 1.3.3 (was 1.1.2)
Using jsbundling-rails 1.2.1 (was 1.1.1)
Using stimulus-rails 1.3.0 (was 1.2.1)
Using turbo-rails 1.5.0 (was 1.4.0)
Using web-console 4.2.1 (was 4.2.0)
Using rails 7.1.1 (was 7.0.5)
Bundle updated!
```

### Step 2
Run the update task using the command: 
```
rails app:update
```
 This task will start an interactive session creating new files and changing old ones. 
 So follow the instructions on the screen. This step combines your configuration files with the latest version.

#### puma
```gemfile
gem 'puma', '< 7'
```
- exec
```bash
bundle update
```
- info
```
...
Fetching puma 6.4.0 (was 5.6.7)
...
Installing puma 6.4.0 (was 5.6.7) with native extensions
Bundle updated!
```

### Step 3
Fix the deprecated features related to your target version. 
Check out the upgrading Ruby on Rails guide here to see what you will need to change at this step. 
My advice is to move slowly, change by change, always run your test suite or start 
the application server to verify that everything is working as before. 
You may need to repeat these three steps many times until you get to the latest version.

- new file
> config\initializers
```
new_framework_defaults_7_1.rb
```

## OS Issues

### firewall
部署数据库的服务器需要放行
```
3306
```
端口

### file format
```
tdtc@tdtc410:~/veic_web-r2$ ./bin/dev
/usr/bin/env: ‘bash\r’: No such file or directory
```
由于文件格式是Windows(CR LF), 
需要变换到 Unix(LF).
```
rm ./bin/dev
vi ./bin/dev
sudo chmod +x ./bin/dev
```

## Version adjustment

### Rails skip migrations
config/environments/development.rb:
```
 # Raise an error on page load if there are pending migrations.
  config.active_record.migration_error = :page_load
```
=>
```
 # Raise an error on page load if there are pending migrations.
  config.active_record.migration_error = false
```

### app css
> app/views/layouts
application.html.erb(Ln10):
```
 <%= stylesheet_link_tag "app", "data-turbo-track": "reload" %>
```
=>    
application.html.erb(Ln9):
```
 <%= stylesheet_link_tag "application", "app", "data-turbo-track": "reload" %>
```


# Ref
- [How to Update your Rails Application to the Latest Version](https://reinteractive.com/articles/How-to-update-your-Rails-application-to-the-latest-version-7-0-1)
- [How to Ignore Pending Rails Migrations](https://www.fatosmorina.com/how-to-ignore-pending-rails-migrations/)
- [Linking to CSS Files with the stylesheet_link_tag](https://guides.rubyonrails.org/v7.1/layouts_and_rendering.html#linking-to-javascript-files-with-the-javascript-include-tag)
