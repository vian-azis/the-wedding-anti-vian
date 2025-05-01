
        {
          "@context": "https://schema.org/", 
          "@type": "Product", 
          "name": "Wedding  - Watercolor Peacock",
          "image": "https://itsugadesign.com/themes/watercolor-peacock/watercolor-peacock.webp",
          "description": "Undangan website flowers watercolor minimalist nuansa cream biru dan burung merak - Undangan Online: Undangan digital modern untuk pernikahan dan acara spesial lainnya. Gratis coba dulu, bayar belakangan!",
          "brand": {
            "@type": "Brand",
            "name": "Satu Momen"
          },
          "review": {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "Elsa Gunayanti"
            }
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "579"
          },
          "offers": {
            "@type": "Offer",
            "url": "https://satumomen.com/harga",
            "priceCurrency": "IDR",
            "price": "85000",
            "availability": "https://schema.org/InStock",
            "itemCondition": "https://schema.org/NewCondition"
          }
        }
    


        var notSupport = document.getElementById('notSupport');
        function checkBrowser() { 
            if(navigator.userAgent.indexOf("UCBrowser") != -1 || navigator.userAgent.indexOf("MiuiBrowser") != -1 || navigator.userAgent.indexOf("OppoBrowser") != -1) {
                showModal(notSupport);
                if (loader) {
                    loader.style.display = "none";
                }
            }
        }
        checkBrowser()
    


        
    