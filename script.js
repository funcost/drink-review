const form =
document.getElementById("reviewForm");

const statusText =
document.getElementById("status");

const submitBtn =
document.getElementById("submitBtn");

const API_URL =
"https://script.google.com/macros/s/AKfycbwEhfQq2E-bEOUIO4rhf_cFWwC4F_Od8RLE7bD97YduDlqF3bqsAR9eilH4Ci99yXF32w/exec";

form.addEventListener(
  "submit",
  async (e) => {

    e.preventDefault();

    submitBtn.classList.add("loading");

    submitBtn.innerText =
    "Đang gửi...";

    const formData =
    new FormData(form);

    const data = {

      sweetness:
      formData.get("sweetness"),

      price:
      formData.get("price"),

      rating:
      formData.get("rating"),

      message:
      formData.get("message")

    };

    try {

      const response =
      await fetch(API_URL,{

        method:"POST",

        body:JSON.stringify(data)

      });

      const result =
      await response.text();

      console.log(result);

      statusText.innerHTML =
      "🎉 Cảm ơn bạn đã góp ý ❤️";

      form.reset();

    } catch(error){

      console.error(error);

      statusText.innerHTML =
      "❌ Có lỗi xảy ra";

    }

    submitBtn.classList.remove(
      "loading"
    );

    submitBtn.innerText =
    "Gửi đánh giá";

});