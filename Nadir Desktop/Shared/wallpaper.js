var wallpaper = localStorage.getItem("wallpaper");

function changeWallpaper(wallpaper) {
    if (wallpaper == "ship") {
        document.body.style.backgroundImage = "url('https://ze-robot.com/dl/kn/knife-palette-technique-from-uninchyfakinchy-ai-3840%C3%972160.jpg')";
        localStorage.setItem("wallpaper", "ship");
    }

    else if (wallpaper == "lights") {
        document.body.style.backgroundImage = "url('https://ze-robot.com/dl/at/at-night-under-the-northern-lights-3840%C3%972160.jpg')";
        localStorage.setItem("wallpaper", "lights");
    }

    else if (wallpaper == "galaxy") {
        document.body.style.backgroundImage = "url('https://4kwallpapers.com/images/wallpapers/planet-above-clouds-1920x1080-10035.jpg')";
        localStorage.setItem("wallpaper", "galaxy");
    }

    else if (wallpaper == "gold") {
        document.body.style.backgroundImage = "url('https://4kwallpapers.com/images/wallpapers/golden-larches-fall-forest-trees-5k-3840x2160-8570.jpg')";
        localStorage.setItem("wallpaper", "gold");
    }

    else if (wallpaper == "sea") {
        document.body.style.backgroundImage = "url('https://4kwallpapers.com/images/wallpapers/celtic-sea-atlantic-3840x2160-9188.jpg')";
        localStorage.setItem("wallpaper", "sea");
    }

    else if (wallpaper == "lake") {
        document.body.style.backgroundImage = "url('https://4kwallpapers.com/images/wallpapers/peyto-lake-banff-national-park-canada-canadian-rockies-3840x2160-3744.jpg')";
        localStorage.setItem("wallpaper", "lake");
    }
}

changeWallpaper(wallpaper);