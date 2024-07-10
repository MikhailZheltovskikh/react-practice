Области хранения данных:

-   база данных на json-server
-   BFF
-   реакт редакс

Сущности приложения:

-   пользователь: БД(список пользователей), BFF (сессия текущего), стор (отображение в брайзере)
-   роль пользователя: БД (список ролей), BFF(сессия пользователя с ролью), стор (использование на клиенте)
-   статья: БД(список статей), стор (отображение в браузере)
-   комментарий: БД(список комментариев), стор(отображение в браузере)

Таблицы БД:

-   пользователи - users: id / login / password / registed_at / role_id
-   роли - roles: id / name
-   статьи - posts: id / title / image_url / content / published_at
-   комментарии - comments: id / author_id / post_id / content

Схема состояния на BFF:

-   сессия текущего пользователя: login / password / role

Схема для редакс стора(на клиенте):

-   user: id / login / roleID / session
-   posts: массив post: id / title / imageUrl / publishedAt / commentsCount
-   post: id / title / imageUrl / content / publishedAt / comments: массив comment: id / autor / content / publishedAt
-   users: массив user: id / login / registeresAt / role
