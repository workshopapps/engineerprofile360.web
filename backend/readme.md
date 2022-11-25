# Backend


> **Backend** replies heavily on `PHP 8.x.x` and `Laravel`. If you dont have php installed, follow this link on setting it up. [Setup PHP ON (mac,linux,windows) ](https://www.youtube.com/watch?v=mVzL2MRFANI)

2. move into the desired project folder `backend`
3. Install all projects dependencies using `composer install`.

> If you dont have composer installed, download composer with this [link](https://getcomposer.org/download/).

4. Start backend server locally.. `php artisan serve`. This should startup a local server @ `http://localhost:8000

> make sure MYSQL server has started locally before running the above commands.


# Useful Commands.

### Creating a model and migrating the model.

```shell
php artisan make:model Users --migrate
```

### Migrate existing model

```shell
php artisan migrate
```

### Clear application cache

```shell
php artisan cache:clear
```

> If an error occur while migrating, cross check the `**.env**`  file and make sure you passed the correct database informations

```php
# mysql database setup
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=engineering360
DB_USERNAME=root
DB_PASSWORD= 
<<<<<<< HEAD
```
=======
```
>>>>>>> 23dba6b686bd6cf3a0fb146779fd5f2f272afad2
