let url="";

function lancerDetection() {
  const imageUrl = document.getElementById("imageUrl").value;
  
  if (!imageUrl) {
    document.getElementById("message").textContent = "Veuillez entrer une URL d'image.";
    return;
  }
  
  document.getElementById("message").textContent = "Chargement de l'image...";
  
  const img = new Image();
  img.crossOrigin = "anonymous";
  
  img.onload = function() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    
    // Redimensionner le canvas aux dimensions de l'image
    canvas.width = img.width;
    canvas.height = img.height;
    
    // Dessiner l'image sur le canvas
    ctx.drawImage(img, 0, 0);
    
    document.getElementById("message").textContent = "Image chargée avec succès !";
  };
  
  img.onerror = function() {
    console.error("Erreur CORS ou URL invalide. Essai avec proxy...");
    // Essayer avec un proxy CORS
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const img2 = new Image();
    img2.crossOrigin = "anonymous";
    
    img2.onload = function() {
      const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");
      
      canvas.width = img2.width;
      canvas.height = img2.height;
      ctx.drawImage(img2, 0, 0);
      
      document.getElementById("message").textContent = "Image chargée avec succès !";
    };
    
    img2.onerror = function() {
      document.getElementById("message").textContent = "Erreur : impossible de charger l'image. Vérifiez que l'URL est valide et accessible.";
      console.error("Impossible de charger l'image même avec le proxy.");
    };
    
    img2.src = proxyUrl + imageUrl;
  };
  
  img.src = imageUrl;
}
