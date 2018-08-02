var OnlineEditor = function () {
    this.container = document.getElementById("online_editor");
    this.valueMap = {
        html_basliklari: "<h1>Başlık 1</h1>\n<h2>Başlık 2</h2>\n<h3>Başlık 3</h3>\n<h4>Başlık 4</h4>\n<h5>Başlık 5</h5>\n<h6>Başlık 6</h6>",
        html_paragraflari: "<p>Bu bir paragraftır</p>",
        html_baglantilari: "<a href=\"https://www.google.com.tr\" target=\"_blank\">Google</a>",
        html_goruntuleri: "<img src=\"http://via.placeholder.com/350x150\" alt=\"arkaplan görseli\" width=\"350\" height=\"150\" />",
        html_listeleri: "<ul>\n\t<li> Liste Öğesi </li>\n\t<li> Liste Öğesi </li>\n\t<li> Liste Öğesi </li>\n\t<li> Liste Öğesi </li>\n</ul>\n\n\n\n<ol>\n\t<li> Liste Öğesi </li>\n\t<li> Liste Öğesi </li>\n\t<li> Liste Öğesi </li>\n\t<li> Liste Öğesi </li>\n</ol>\n\n\n\n<ol>\n\t<li> Liste Öğesi \n\t\t<ul>\n\t\t\t<li> Liste Öğesi </li>\n\t\t\t<li> Liste Öğesi </li>\n\t\t\t<li> Liste Öğesi </li>\n\t\t\t<li> Liste Öğesi </li>\n\t\t</ul>\n\t</li>\n\t<li> Liste Öğesi </li>\n\t<li> Liste Öğesi </li>\n\t<li> Liste Öğesi </li>\n\t</ol>",
        html_tablolari: "<table>\n\t<thead>\n\t\t<tr>\n\t\t\t<th>Şirket Adı</th>\n\t\t\t<th>Adresi</th>\n\t\t\t<th>Telefon No</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr>\n\t\t\t<td>Lorem Ipsum</td>\n\t\t\t<td>Proin interdum, eros vel porttitor malesuada, nisl orci rutrum justo</td>\n\t\t\t<td>+90 000 000 00 00</td>\n\t\t<tr>\n\t</tbody>\n</table>\n\n\n\n\n<table>\n\t<caption>COLSPAN Örneği</caption>\n\t<tr>\n\t\t<th>Ad Soyad</th>\n\t\t<th colspan=\"2\">Telefon</th>\n\t</tr>\n\t<tr>\n\t\t<td>Lorem Ipsum</td>\n\t\t<td>000 00 00</td>\n\t\t<td>000 00 00</td>\n\t</tr>\n</table>\n\n<table>\n\t<caption>ROWSPAN Örneği</caption>\n\t<tr>\n\t\t<th>Ad Soyad:</th>\n\t\t<td>Lorem Ipsum</td>\n\t</tr>\n\t<tr>\n\t\t<th rowspan=\"2\">Telefon:</th>\n\t\t<td>000 00 00</td>\n\t</tr>\n\t<tr>\n\t\t<td>000 00 00</td>\n\t</tr>\n</table>",
        html_yorumlari: "<h1>Bu bir başlıktır</h1>\n<!-- Yorum bölümü --!>\n<p>Bu bir paragraftır</p>",
        html_css_siniflari: "<a class=\"kirmizi_link\">Kaydet</a>\n<hr/>\n<a class=\"kirmizi_link kalin_yazi\">Kaydet</a>",
        html_idleri: "<a id=\"link_kaydet\">Kaydet</a>",
        html_bicimleri: "Bu<b> kalın </b>bir yazıdır.\n\n<hr>\n\nBu<strong> önemli </strong>bir yazıdır.\n\n<hr>\n\nBu<i> italik </i>bir yazıdır.\n\n<hr>\n\nBu<em> vurgulanmış </em>bir yazıdır.\n\n<hr>\n\nBu<mark> işaretlenmiş</mark> bir yazıdır.\n\n<hr>\n\nBu<small> küçük</small> bir yazıdır.\n\n<hr>\n\nBu<del> silinmiş </del>bir yazıdır.\n\n<hr>\n\nBu<ins> eklenmiş </ins>bir yazıdır.\n\n<hr>\n\nBu<sub> aşağı hizalanmış</sub> bir yazıdır.\n\n<hr>\n\nBu<sup>yukarı hizalanmış</sup> bir yazıdır.",
        html_formlari: "<form>\n\t<div>\n\t\tAd:\n\t\t<input type=\"text\" name=\"ad\">\n\t</div>\n\t<div>\n\t\tSoyad:\n\t\t<input type=\"text\" name=\"soyad\">\n\t</div>\n\t<div>\n\t\tBeni Hatırla \n\t\t<input type=\"checkbox\">\n\t</div>\n\t<div>\n\t\t<input type=\"submit\" value=\"Giriş Yap\">\n\t</div>\n</form>",
        html_form_elemanlari: "<input type=\"text\" name=\"ad\"/>\n<hr>\n<select name=\"sehir\">\n\t<option value=\"ankara\">\n\t\tAnkara\n\t</option>\n\t<option>\n\t\tİstanbul\n\t</option>\n</select>\n<hr>\n<select multiple name=\"sehir\">\n\t<option value=\"ankara\">\n\t\tAnkara\n\t</option>\n\t<option>\n\t\tİstanbul\n\t</option>\n</select>\n<hr>\n<textarea cols=\"15\" rows=\"20\">Bu bir textareadır</textarea>\n<hr>\n<button>\n\tKaydet\n</button>"
    };
    this.page = document.body.getAttribute("rel");
};

OnlineEditor.prototype.init = function(){
    if (!this.container) {
        return;
    }
    var self = this;
    this.textArea = document.createElement("textarea");
    this.textArea.classList.add("editor_textarea");
    this.textArea.setAttribute("rows", 20);
    this.textArea.value = this.valueMap[this.page];
    this.container.appendChild(this.textArea);

    this.preview = document.createElement("div");
    this.preview.classList.add("editor_preview");
    this.preview.innerHTML = this.textArea.value;
    this.container.appendChild(this.preview);

    this.runButton = document.createElement("button");
    this.runButton.classList.add("editor_run_button");
    this.runButton.innerHTML = "Çalıştır";
    this.container.appendChild(this.runButton);
    this.runButton.addEventListener("click", function () {
       self.preview.innerHTML = self.textArea.value; 
    });
};