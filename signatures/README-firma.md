# Firma de correo BENPAX

Se incluyen dos versiones basadas solo en tablas y CSS inline:

- `firma-outlook.html`: Outlook New y Outlook en la Web. Incluye iconos Bootstrap exportados como SVG inline.
- `firma-gmail.html`: versión ajustada para Gmail, con la misma estructura de tablas e iconos Bootstrap como SVG inline.

## Antes de instalar

Los dos HTML usan el logo oficial `logo-benpax.png` de la carpeta raíz, con un ancho mostrado de 220 px.

Para que el logo se vea también en los mensajes de destinatarios externos, abra el HTML desde una ubicación donde el navegador pueda cargar la imagen, o sustituya el valor de `src="logo-benpax.png"` por la URL HTTPS pública definitiva del logo. Una ruta local no se envía automáticamente al destinatario.

## Instalar en Outlook New / Outlook en la Web

1. Abra `firma-outlook.html` en Edge o Chrome después de disponer de `logo-benpax.png`.
2. Seleccione visualmente toda la firma, desde el logo hasta la ubicación, y cópiela (`Ctrl+C`).
3. En Outlook New, abra **Configuración** (engranaje) > **Cuentas** > **Firmas**. En Outlook en la Web, abra **Configuración** > **Correo** > **Redactar y responder**.
4. Cree una firma nueva, asigne un nombre y pegue el contenido (`Ctrl+V`) en el editor.
5. Elija esta firma para mensajes nuevos y/o respuestas, según corresponda, y guarde.
6. Envíe un correo de prueba a una cuenta externa y confirme que el logo, los enlaces y la línea vertical se ven correctamente.

## Gmail

Abra `firma-gmail.html` en un navegador, copie la firma completa y péguela en **Gmail > Configuración > Ver todos los ajustes > General > Firma**. Guarde los cambios.
