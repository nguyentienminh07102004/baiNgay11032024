<%@page contentType="text/html" pageEncoding="UTF-8" %>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>

    <body>
        <form action="game" method="GET">
            <label>
                number guessing game</label><br>
            <label for="num">Your number you choose is: </label><input type="number" name="number" id="number">
            <input type="submit" value="SUBMIT">
        </form>
        <% if(request.getAttribute("result") != null){ %>
            <h1>You must <%= (String)request.getAttribute("result") %>
            </h1>
            <%}%>
    </body>

    </html>