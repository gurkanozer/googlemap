# Google map ve Chartjs

Proje için react'ı kullandım. (Fakat istenirse javascript'le de yapabileceğimi düşünüyorum.)

Veri tabanı yok. Bu nedenle Data.js dosyası oluşturdum ve içine dummy data yazdım.
Map'i kullanmak için Map component'ini eklemeniz yeterli. Prop olarak canAddItem=true verirseniz ekleme ve çıkarma işlemlerini yapabilir aksi halde sadece map ve markerlar görüntülenir.

Grafikleri kullanmak için Charts compnentini ekleyip name, label, labels(Chartjs'in istediği labels dizisi.) ve data(Görüntülenecek data dizisi) proplarını geçmeniz gerek.
