    // Résumé des fonctions utilisées pour le dessin sur un canvas
    // beginPath(): Démarre un nouveau chemin en vidant la liste des sous-chemins. Appelé avant de dessiner un nouveau chemin.
    // moveTo(x, y) : Positionne le point de départ du dessin (mais ne dessine pas encore)
    // lineTo(x, y) : Définit un segment de ligne à dessiner à partir du point de depart défini par moveto jusqu'à x y
    // ctx.stroke(); — Trace le chemin défini.

    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    const positionDisplay = document.getElementById('position');
    const clearButton = document.getElementById('clearButton');
    const colorPicker = document.getElementById('colorPicker');
    const thickness = document.getElementById('thickness');
    const bgColorPicker = document.getElementById('bgColorPicker');
    const modeSelect = document.getElementById('mode');

    let drawing = false;
    let currentColor = colorPicker.value;
    let currentThickness = thickness.value;
    let backgroundColor = bgColorPicker.value;
    let mode = modeSelect.value;

    // Créer un deuxième canvas pour sauvegarder le contenu, ce canvas n'est pas ajouté au dom --> il est invisible
    const offscreenCanvas = document.createElement('canvas');
    const offscreenCtx = offscreenCanvas.getContext('2d');
    offscreenCanvas.width = canvas.width;
    offscreenCanvas.height = canvas.height;

    function redrawCanvas() {
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(offscreenCanvas, 0, 0);
    }

    canvas.addEventListener('mousemove', function(event) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        positionDisplay.textContent = `Position: X=${x}, Y=${y}`;

        if (drawing) {
        if (mode === 'erase') {
            offscreenCtx.clearRect(x - currentThickness / 2, y - currentThickness / 2, currentThickness, currentThickness);
            redrawCanvas();
        } else {
            ctx.lineTo(x, y);
            ctx.stroke();
            offscreenCtx.lineTo(x, y);
            offscreenCtx.stroke();
        }
        }
    });

    canvas.addEventListener('mousedown', function(event) {
        drawing = true;
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        ctx.beginPath();
        ctx.moveTo(x, y);
        offscreenCtx.beginPath();
        offscreenCtx.moveTo(x, y);

        if (mode === 'erase') {
        } else {
            ctx.strokeStyle = currentColor;
            offscreenCtx.strokeStyle = currentColor;
        }

        ctx.lineWidth = currentThickness;
        offscreenCtx.lineWidth = currentThickness;
    });

    canvas.addEventListener('mouseup', function() {
        drawing = false;
    });

    canvas.addEventListener('mouseleave', function() {
        drawing = false;
    });

    clearButton.addEventListener('click', function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        offscreenCtx.clearRect(0, 0, offscreenCanvas.width, offscreenCanvas.height);
        redrawCanvas();
    });

    colorPicker.addEventListener('input', function() {
        //  this fait référence à l'élément qui a déclenché l'événement (contexte appelant).  !!! Les fonctions fléchées perdent le contexte de this !!!!
        currentColor = this.value;
        if (mode === 'draw') {
            ctx.strokeStyle = currentColor;
            offscreenCtx.strokeStyle = currentColor;
        }
    });

    thickness.addEventListener('input', function() {
        currentThickness = this.value;
        ctx.lineWidth = currentThickness;
        offscreenCtx.lineWidth = currentThickness;
    });

    bgColorPicker.addEventListener('input', function() {
        backgroundColor = this.value;
        redrawCanvas();
    });
    
    modeSelect.addEventListener('change', function() {
        mode = this.value; 
    });
    redrawCanvas();


// Diff entre les events change et input 
// input : Se déclenche à chaque modification de la valeur, pour une mise à jour instantanée.
// change : Se déclenche après que l'utilisateur a terminé sa modification et quitté le champ, pour une action une fois la modification terminée. 
