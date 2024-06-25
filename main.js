const container = document.getElementById("container");
const assets = document.getElementById("assets");

//Func. calls
getDesc();
renderAssets();
asset1Render();
asset2Render();
asset3Render();

function getDesc() {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const tasks = data.tasks[0];

            const descContainer = document.createElement("div");
            descContainer.classList.add("descContainer");
            descContainer.innerHTML = `
                <div class="descContent">
                    <h1>${tasks.task_title}</h1>
                    <p>${tasks.task_description}</p>
                </div>
            `
            container.appendChild(descContainer);
        })
        .catch(error => {
            console.log(error);
        });
}

function renderAssets() {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const assetsList = data.tasks[0].assets;

            return assetsList.forEach((asset) => {
                const assetContainer = document.createElement("div");
                assetContainer.classList.add("asset");
                assetContainer.classList.add(`${asset.asset_id}`);

                assetContainer.innerHTML = `
                    <div class="assetHead">
                        <span>${asset.asset_title}</span>
                        <button>i</button>
                    </div>
                    <div class="assetDesc">
                        <p><span>Description : </span>${asset.asset_description}</p>
                    </div>
                `
                assets.appendChild(assetContainer);
            })
        })
        .catch(error => {
            console.log(error);
        })
}

function asset1Render() {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const assets = data.tasks[0].assets[0];
            const asset1 = document.getElementsByClassName(`${assets.asset_id}`);
            const assetDetails = document.createElement("div");
            assetDetails.classList.add("assetDetails");
            assetDetails.innerHTML = `
                   <iframe src=${assets.asset_content} frameborder="0" allowfullscreen></iframe>`
            Array.prototype.forEach.call(asset1, (assetItem) => {
                assetItem.appendChild(assetDetails.cloneNode(true));
            });
        })
        .catch(error => {
            console.log(error);
        })
}

function asset2Render() {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const assets = data.tasks[0].assets[1];
            const asset2 = document.getElementsByClassName(`${assets.asset_id}`);
            const assetDetails = document.createElement("div");
            assetDetails.classList.add("assetDetails");
            assetDetails.innerHTML = `
                <div class="detailsHead">
                    <button><img src="assets/Vector (2).png" alt="dropdown"></button>
                    <span>Thread A</span>
                </div>

                <div class="inputsArea">
                    <div class="inputs">
                        <span>Sub Thread 1</span>
                        <textarea rows="10" cols="30" placeholder="Enter Text here."></textarea>
                    </div>  

                    <div class="inputs">
                        <span>Sub Interpretation 1</span>
                        <textarea rows="10" cols="30" placeholder="Enter Text here."></textarea>
                    </div>
                </div>

                <div class="threadOptions">
                    <div class="group1">
                        <button><img src="assets/Vector (3).png" alt="button2"></button>
                        <button><img src="assets/Vector (4).png" alt="button3"></button>
                        <button><img src="assets/Vector (5).png" alt="button4"></button>
                        <button><img src="assets/Vector.png" alt="button1"></button>
                    </div>
                    <div class="group2">
                        <button>Select Categ <img src="assets/Vector (2).png" alt="dropdown"></button>
                        <button>Select Process <img src="assets/Vector (2).png" alt="dropdown"></button>
                    </div>
                </div>

                <button class="threadButton"><img src="assets/+.png" alt="dropdown"> Sub-thread</button>

                <div class="summary">
                    <span>Summary for Thread A</span>
                    <textarea rows="10" cols="30" placeholder="Enter Text here."></textarea>
                </div>
            `
            Array.prototype.forEach.call(asset2, (assetItem) => {
                assetItem.appendChild(assetDetails.cloneNode(true));
            });
        })
        .catch(error => {
            console.log(error);
        })
}

function asset3Render() {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const assets = data.tasks[0].assets[2];
            const asset3 = document.getElementsByClassName(`${assets.asset_id}`);
            const assetDetails = document.createElement("div");
            assetDetails.classList.add("assetDetails");
            assetDetails.innerHTML = `
                <div class="assetTitle">
                    <span>Title</span>
                    <input type="text" />
                </div>

                <div class="assetContent">
                    <span class="assetContentHead">Content</span>
                    <div class="dashboard">
                        <div class="dashboardHead">
                            <span>File</span>
                            <span>Edit</span>
                            <span>View</span>
                            <span>Insert</span>
                            <span>Format</span>
                            <span>Tools</span>
                            <span>Table</span>
                            <span>Help</span>
                        </div>
                        <div class="dashboardOptions">
                            <button class="dashIcon"><img src="assets/icon.png" alt="1" /></button>
                            <button class="dashIcon"><img src="assets/icon (1).png" alt="2" /></button>
                            <button class="dashIcon"><img src="assets/icon (2).png" alt="3" /></button>
                            <button class="paragraph"><span>Paragraph</span></button>
                            <button class="dashIcon"><i class="fa-solid fa-ellipsis-vertical"></i></button>
                        </div>
                    </div>
                    <textarea rows="10" cols="30"></textarea>
                </div>
            `
            Array.prototype.forEach.call(asset3, (assetItem) => {
                assetItem.appendChild(assetDetails.cloneNode(true));
            });
        })
        .catch(error => {
            console.log(error);
        })
}