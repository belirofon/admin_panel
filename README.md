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

```bash
git clone https://github.com/yourusername/admin-panel-project.git

2. Перейдите в проект:

```bash
cd admin-panel-project

3. Установите зависимости для бэкенда и фронтенда:

```bash
cd api && npm install
# или
cd api && yarn install

cd ../front && npm install
# или
cd front && yarn install

4. Запустите PostgreSQL в Docker:

```bash
docker-compose up -d

5. Запустите бэкенд NestJS:

```bash
cd api && npm run start:dev
# или
cd api && yarn start:dev


6. Запустите фронтенд React:

```bash
cd front && npm start
# или
cd front && yarn start

### Приложение будет доступно по адресу http://localhost:3000.
