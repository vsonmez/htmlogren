var menuData = [
    {
        text: "HTML'in Tanımı",
        url: "index.html"
    },
    {
        text: "HTML Yazma Yöntemleri",
        url: "html_yazma_yontemleri.html"
    },
    {
        text: "HTML Elemanları",
        url: "html_elemanlari.html"
    },
    {
        text: "HTML Öznitelikleri",
        url: "html_oznitelikleri.html"
    },
    {
        text: "HTML Başıkları",
        url: "html_basliklari.html"
    },
    {
        text: "HTML Paragrafları",
        url: "html_paragraflari.html"
    },
    {
        text: "HTML Bağlantıları/Linkleri",
        url: "html_baglantilari.html"
    },
    {
        text: "HTML Görüntüleri",
        url: "html_goruntuleri.html"
    },
    {
        text: "HTML Listeleri",
        url: "html_listeleri.html"
    },
    {
        text: "HTML Tabloları",
        url: "html_tablolari.html"
    },
    {
        text: "HTML Yorumları",
        url: "html_yorumlari.html"
    },
    {
        text: "HTML CSS Sınıfları",
        url: "html_css_siniflari.html"
    },
    {
        text: "HTML ID'leri",
        url: "html_idleri.html"
    },
    {
        text: "HTML Biçimleri",
        url: "html_bicimleri.html"
    },
    {
        text: "HTML Formları",
        url: "html_formlari.html"
    },
    {
        text: "HTML Form Elemanları",
        url: "html_form_elemanlari.html"
    },
    {
        text: "HTML Form Eleman Tipleri",
        url: "html_form_tipleri.html"
    }
];
var MainMenu = function (container) {
    this.container = document.getElementById(container);
};

MainMenu.prototype.init = function(){
    var createMenuItem = function (item) {
        var link = document.createElement("a");
        link.setAttribute("href", item.url);
        link.innerHTML = item.text;
        link.setAttribute("rel", item.url.split(".")[0]);
        if (item.url === "#") {
            link.classList.add("disabled");
        }
        if(document.body.getAttribute("rel") === link.getAttribute("rel")) {
            link.classList.add("selected");
        }
        return link;
    };
    var menuIndex;
    for (menuIndex = 0; menuIndex < menuData.length; menuIndex += 1) {
        this.container.appendChild(createMenuItem(menuData[menuIndex]));
    }
};