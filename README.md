# Admin Panel Project

Этот проект представляет собой административную панель (admin panel), разработанную с использованием NestJS для бэкенда и React для фронтенда.

## Функциональность

Административная панель предоставляет следующую функциональность:

- Аутентификация пользователей с использованием JWT токенов.
- Управление пользователями: создание, редактирование, удаление.
- Ролевая модель доступа к функциональности на основе токена.

## Требования

Для запуска этого проекта вам потребуется установить следующие компоненты:

- [Node.js](https://nodejs.org/) (рекомендуется LTS версия)
- [Docker](https://www.docker.com/get-started)

## Установка и запуск

1. Склонируйте репозиторий:

```sh
git clone https://github.com/yourusername/admin-panel-project.git
```
2. Перейдите в проект:

```sh
cd admin-panel-project
```
3. Установите зависимости для бэкенда и фронтенда:

```sh
cd api && npm install
```
# или
```sh
cd api && yarn install
```
cd ../front && npm install
# или
```sh
cd front && yarn install
```
4. Запустите PostgreSQL в Docker:

```sh
docker-compose up -d
```
5. Запустите бэкенд NestJS:

```sh
cd api && npm run start:dev
```
# или
```sh
cd api && yarn start:dev
```

6. Запустите фронтенд React:

```sh
cd front && npm start
```
# или
cd front && yarn start
```sh
### Приложение будет доступно по адресу http://localhost:3000.
