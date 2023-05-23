1. How did we change our route definitions in order to 
   "protect" certain routes from an un-logged-in user?

Wrapped the routes we wanted to protect in a Layout route
that contains logic to redirect someone if they're not logged
in
(Оборачиваем маршруты которые мы хотим защитить в Layout который содержит логику для перенаправления на другой маршрут в случае если пользователь не авторизован (например перенаправить на страницу ввода логина и пароля))
   
2. What component can we use to automatically send someone
   to a different route in our app?

<Navigate to="/login" />


3. What component can we render if the user IS logged in?

<Outlet />