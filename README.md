Деплой приложения Mesto на сервер с использованием PM2
Учебный проект Яндекс.Практикума

Задачи приложения Mesto
Проект Mesto - это площадка в интернете, посредством которой пользователи могут публиковать собственные или другие понравившиеся им фотографии. Пользователи имеют возможность знакомиться с изображениями, опубликованными другими пользователями, отмечать понравившиеся фотографии лайками, количество которых подсчитывается и показывается пользователям.

На площадке сохраняются только ссылки на размещенные на других ресурсах изображения, а не непосредственно файлы изображений.

Учебные задачи проекта
Код серверной и клиентской частей приложения Mesto предоставлен Яндекс.Практикумом и в данной проектной работе студентом не разрабатывается.

Целью учебной проектной работы было получение практических навыков создания удаленного сервера, обеспечения возможности автоматического размещения клиентской и серверной частей приложения на удаленном сервере, организация постоянной работы приложения. Способность удаленного сервера восстанавливать работу серверной части приложения возможно проверить запросом с помощью краш-теста, отправив Get-запрос по адресу https://api.mestokirbob.students.nomoredomains.monster/crash-test . 

Деплой приложения автоматизирован с помощью конфигурационных файлов экосистемы клиентской и серверной частей приложения (разработаны студентом), исполняемых менеджером процессов PM2. Для организации раздачи статических файлов и перенаправления запросов используется Nginx. Обеспечена возможность взаимодействия клиентской и серверной части приложения с использованием SSL-протокола.

Использованные технологии
Node.js, Git, PM2, Nginx.

Публикация проекта
IP адрес сервера: 158.160.122.56

Frontend: https://mestokirbob.students.nomoredomainsicu.ru

Backend: https://api.mestokirbob.students.nomoredomainsicu.ru

Доступные команды
Код клиентской и серверной частей приложения расположен в одном репозитории:

клиентская часть - в каталоге frontend
серверная часть - в каталоге backend
Перечисленные ниже команды должны использоваться из указанных каталогов. Их запуск в корневом каталоге проекта не будет иметь результата.

npm i - установление зависимостей частей приложения.

pm2 deploy production setup - команда подготовки деплоя части приложения (создание необходимых каталогов на удалённом сервере и клонирование кода из репозитория на GitHub).

pm2 deploy production - команда деплоя (обновления) части приложения (сравнение версии кода на удаленном сервере с размещенным в репозитории и при необходимости его обновление, установление зависимостей; сборка рабочей версии кода клиентской части приложения; запуск (перезапуск) серверной части приложения).
