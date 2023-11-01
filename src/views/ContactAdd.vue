<template>
    <div>
      <ContactForm :contact="contactData" 
      @submit:contact="CreateContact"
      />
      <h1></h1>
    </div>
  </template>
  
  <script>
  import ContactForm from "@/components/ContactForm.vue";
  import ContactService from "@/services/contact.service";
  
  export default {
    components: {
      ContactForm,
    },
    data() {
      return {
        contactData: {
          name: "",
          email: "",
          address: "",
          phone: "",
          favorite: false,
        },
      };
    },
    methods:{
        async CreateContact(data) {
        try {
            await ContactService.create(data)
            confirm('tạo hiện hệ thành công')
        } catch (error) {
          console.log(error);
        }
      },
    }
  };
  </script>