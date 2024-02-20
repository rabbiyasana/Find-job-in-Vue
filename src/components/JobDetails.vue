<script>
import { ref, onMounted } from 'vue';
// import { useRoute } from 'vue-router';

import axios from 'axios';
export default {
    name: 'JobDetails',
    setup(){
        // const route = useRoute();
        const jobTitle = ref('');
        const jobDescription = ref(''); 
        const jobName = ref(''); 
        const jobAddress = ref(''); 
        const jobCategory = ref(''); 
        const experience = ref('')
        const experience_level = ref('');

        const employment_type = ref(''); 
        const salary_min = ref(''); 
        const salary_max = ref(''); 

        const fetchJobDetails = async(id) =>{
            try {
            const response = await axios.get(`http://51.20.72.242/api/v1/jobs/${id}`);
            const jobDetails = response.data.data; 
           
            const categoryNames = response.data.data.categories.map(category => category.name)[0];

            jobTitle.value = jobDetails.title;
            jobDescription.value = jobDetails.description;
            jobName.value = jobDetails.name;
            jobAddress.value = jobDetails.address;
            jobCategory.value = categoryNames;

            experience_level.value = jobDetails.experience_level;
            experience.value =jobDetails.experience
            console.log(experience_level.value)
            employment_type.value = jobDetails.employment_type;
            salary_min.value = jobDetails.salary_min;
            salary_max.value = jobDetails.salary_max;

            } catch (error) {
                console.error("Error fetching job details:", error);
            }
        }

        onMounted(async () => {
            await fetchJobDetails("00716e67-3e9a-448c-a544-d425fa160d4a");
        });

        return { jobTitle, jobDescription, jobName, jobAddress, jobCategory ,experience_level,experience,employment_type,salary_min, salary_max};
    }
};
</script>

<template>
    <div class="w-full flex justify-center mt-3 ">
        <div class="lg:w-10/12 h-64 "><img src="@/assets/images/company_banner.png" alt="banner" class="h-full w-full rounded-lg" /></div>
    </div>
    <div class="flex justify-center mt-5">
        <div class="flex lg:w-10/12 py-5">
        <div class="lg:w-8/12 flex ">
         <div  class="lg:w-6/12">
            <h1 class="text-3xl font-bold">
              {{ jobTitle }}  
            </h1>
            <p class="my-2 text-sxm">by <strong>{{ jobName }}</strong> in {{jobAddress  }}</p>
            <p class="my-2 text-sxm">{{ jobCategory }}</p>
         </div>
         <div  class="lg:w-6/12">
            <div class="flex justify-end mt-3"><a href="#"  class="rounded-full bg-blue-500 shadow-md text-white px-4 py-3 my-4">Apply Now</a>                             </div>
         </div>
        
        </div>
        <div class="lg:w-4/12 ">
            <div class="bg-blue-100 mt-4 mt-lg-0 rounded-2xl py-4 px-3 mx-3">
                <span class="mx-2">
                    <p class="text-sm text-gray-500">Experience</p>
                    <p class="font-semibold">{{ experience }}</p>
                </span>
                <span class="mx-1">
                    <p class="text-sm text-gray-500">Work Level</p>
                    <p class="font-semibold">{{ experience_level }}</p>
                </span>
                <span class="mx-1">
                    <p class="text-sm text-gray-500">Employment Type</p>
                    <p class="font-semibold">{{ employment_type }}</p>
                </span>
                <span class="mx-1">
                    <p class="text-sm text-gray-500">Salary</p>
                    <p class="font-semibold">{{salary_min }} to {{salary_max }}/year</p>
                </span>
            </div>
        </div>
    </div>
    </div>
    
    
</template>
