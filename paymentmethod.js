 function showTab(tab) {
      let cardForm = document.getElementById("card-form");
      let bankForm = document.getElementById("bank-form");
      let tabs = document.querySelectorAll(".tab");

      tabs.forEach(t => t.classList.remove("active"));

      if (tab === "card") {
        cardForm.style.display = "block";
        bankForm.style.display = "none";
        tabs[0].classList.add("active");
      } else {
        cardForm.style.display = "none";
        bankForm.style.display = "block";
        tabs[1].classList.add("active");
      }
    }



//validating card
function validateCard() {
      let name = document.getElementById("cardName").value.trim();
      let number = document.getElementById("cardNumber").value.trim();
      let expiry = document.getElementById("expiry").value.trim();
      let cvc = document.getElementById("cvc").value.trim();

      if (!name || number.length !== 16 || !/^\d+$/.test(number) ||
          !/^\d{2}\/\d{2}$/.test(expiry) || cvc.length !== 3) {
        alert("⚠ Please fill all card fields correctly!");
        return;
      }
      showLoading();
    }


     function validateBank() {
      let accName = document.getElementById("accName").value.trim();
      let accNumber = document.getElementById("accNumber").value.trim();
      let bankName = document.getElementById("bankName").value.trim();

      if (!accName || accNumber.length !== 10 || !/^\d+$/.test(accNumber) || !bankName) {
        alert("⚠ Please fill all bank fields correctly!");
        return;
      }
      showLoading();
    }

    function showLoading() {
      let loading = document.getElementById("loadingSpinner");
      loading.style.display = "flex";

      setTimeout(() => {
        loading.style.display = "none";
        showConfirmation();
      }, 2000); // 2 seconds delay
    }

    function showConfirmation() {
      let modal = document.getElementById("confirmationModal");
      modal.style.display = "flex";
    }

    function closeModal() {
      document.getElementById("confirmationModal").style.display = "none";
      window.location.href = 'landing.html';
    }