package models


type Usuario struct {
    ID       int    `json:"id" db:"id"`
    Nombre   string `json:"nombre" db:"nombre"`
    Correo   string `json:"correo" db:"correo"`
    Password string `json:"password" db:"password"`
}

type Auto struct {
    ID         int     `db:"id"`
    Tipo       string  `db:"tipo"`
    Color      string  `db:"color"`
    Modelo     string  `db:"modelo"`
    Marca      string  `db:"marca"`
    Precio     float64 `db:"precio"`
    Disponible bool    `db:"disponible"`
}

type Reserva struct {
    ID          int     `db:"id"`
    UsuarioID   int     `db:"usuario_id"`
    AutomovilID int     `db:"automovil_id"`
    PrecioTotal float64 `db:"precio_total"`
}
