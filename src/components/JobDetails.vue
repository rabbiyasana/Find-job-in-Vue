<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

import axios from 'axios';

        const route = useRoute();
        const jobTitle = ref('');
        const jobDescription = ref(''); 
        const jobName = ref(''); 
        const jobAddress = ref(''); 
        const jobCategory = ref(''); 
        const categoryIcon = ref('')
        const experience = ref('')
        const experience_level = ref('');

        const employment_type = ref(''); 
        const salary_min = ref(''); 
        const salary_max = ref(''); 

        const org_name = ref('')
        const org_size = ref('')
        const org_founded = ref('')
        const org_phone = ref('')
        const org_email = ref('')
        const org_loc = ref('')
        const org_website = ref('')

        const fetchJobDetails = async(id) =>{
            try {
            const response = await axios.get(`http://51.20.72.242/api/v1/jobs/${id}`);
            const jobDetails = response.data.data; 
            const categoryNames = response.data.data.categories.map(category => category.name).join(', ');
            const iconName = response.data.data.categories.map(category => category.icon.replace('fa fa-', ''))[0];
            jobTitle.value = jobDetails.title;
            jobDescription.value = jobDetails.description;
            jobName.value = jobDetails.name;
            jobAddress.value = jobDetails.address;
            jobCategory.value = categoryNames;
            categoryIcon.value = iconName

            experience_level.value = jobDetails.experience_level;
            experience.value =jobDetails.experience
        
            employment_type.value = jobDetails.employment_type;
            salary_min.value = jobDetails.salary_min;
            salary_max.value = jobDetails.salary_max;
            org_name.value = jobDetails.name;
            org_size.value = jobDetails.size;
            org_founded.value = jobDetails.founded_in;
            org_phone.value = jobDetails.phone;
            org_email.value = jobDetails.email;
            org_loc.value = jobDetails.address;
            org_website.value = jobDetails.website;
            

            

            } catch (error) {
                console.error("Error fetching job details:", error);
            }
        }

        onMounted(async () => {
            const jobId = route.params.id;
            await fetchJobDetails(jobId);
        });

      
   

</script>

<template >
    <div class="w-full flex justify-center mt-3 ">
        <div class="lg:w-8/12 md:w-11/12 h-64 "><img src="@/assets/images/company_banner.png" alt="banner" class="h-full w-full rounded-lg" /></div>
    </div>
    <div class="lg:w-8/12 md:w-11/12 mx-auto flex justify-center mt-5">
        <div class="flex justify-center items-between  lg:w-9/12">
         <div  class="mt-5 w-8/12 md:8/12 lg:w-19/12  xl:w-10/12">
            <div>
                <h1 class="text-3xl font-bold">
              {{ jobTitle }}  
            </h1>
            <p class="my-2 text-sxm">by <strong>{{ jobName }}</strong> in {{jobAddress  }}</p>
            <p  class="my-2 text-sxm">
              <v-icon name="io-heart-circle-outline"></v-icon> {{ jobCategory }} </p>
            </div>
            <span class="mx-3">
                <h1 class="text-lg  font-semibold">Overview</h1>
            <p class="text-sm text-gray-800 leading-6">
                As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent. You will help the team design beautiful interfaces that solve business challenges for our clients. We work with a number of Tier 1 banks on building web-based applications for AML, KYC and Sanctions List management workflows. This role is ideal if you are looking to segue your career into the FinTech or Big Data arenas.
            </p>
          </span>
         </div>
         <div  class="flex justify-between flex-row mt-5 sm:w-4/12 md:4/12 lg:w-2/12 ">
         
           <v-icon name="io-heart-circle-outline" class="mt-4"></v-icon>
           <v-icon name="md-share-round" class="mt-4"></v-icon>
          
            <div class=" mt-3"><a href="#"  class="rounded-full bg-blue-500 shadow-md text-white px-4 py-3 my-4">Apply Now</a>                             </div>
         </div>
         
       
         </div>
        <div class="lg:w-3/12 ">
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

    <div class="lg:w-8/12 md:w-11/12 mx-auto flex justify-center py-5 my-5">
        <div class="lg:w-9/12 ">
           <span class="mx-3">
            <h1 class="text-lg  font-semibold">Responsabilities</h1>
                <ul class="list-disc text-sm text-gray-800 ml-5 leading-8">
                        <li>
                          Be involved in every step of the product design cycle
                          from discovery to developer handoff and user
                          acceptance testing.
                        </li>
                        <li>
                          Work with BAs, product managers and tech teams to lead
                          the Product Design
                        </li>
                        <li>
                          Maintain quality of the design process and ensure that
                          when designs are translated into code they accurately
                          reflect the design specifications.
                        </li>
                        <li>
                          Accurately estimate design tickets during planning
                          sessions.
                        </li>
                        <li>
                          Contribute to sketching sessions involving
                          non-designersCreate, iterate and maintain UI
                          deliverables including sketch files, style guides,
                          high fidelity prototypes, micro interaction
                          specifications and pattern libraries.
                        </li>
                        <li>
                          Ensure design choices are data led by identifying
                          assumptions to test each sprint, and work with the
                          analysts in your team to plan moderated usability test
                          sessions.
                        </li>
                        <li>
                          Design pixel perfect responsive UI’s and understand
                          that adopting common interface patterns is better for
                          UX than reinventing the wheel
                        </li>
                        <li>
                          Present your work to the wider business at Show &amp;
                          Tell sessions.
                        </li>
                      </ul>
                
           
           </span>
            <span class="mx-3">
                <h1 class="text-lg  font-semibold">Requirements</h1>
          
                <ul class="list-disc text-sm text-gray-800 ml-5 leading-8">
                        <li>
                          4+ years of system administration experience with the
                          Microsoft Server platform (2012/2016, Microsoft IIS,
                          Active Directory)
                        </li>
                        <li>
                          3+ years of hands-on system administration experience
                          with AWS (EC2, Elastic Load Balancing, Multi AZ, etc.)
                        </li>
                        <li>4+ years of SQL Server, MySQL</li>
                        <li>
                          Working knowledge of Encryption techniques and
                          protocols, Multi-factor authentication, Data
                          protection, Penetration testing, Security threats
                        </li>
                        <li>
                          Bachelor's Degree, or 4+ years of hands-on IT
                          experience
                        </li>
                      </ul>
        
            </span>
            <span class="my-3"><h1 class="text-lg  font-semibold">Skills</h1>
                <ul class="list-disc text-sm text-gray-800 ml-5 leading-8">
                        <li>
                          Programming experience developing web applications
                          with the Microsoft .NET stack and a basic knowledge of
                          SQL
                        </li>
                        <li>
                          Development experience with Angular, Node.JS, or
                          ColdFusion
                        </li>
                        <li>HTML, CSS, XHTML, XML</li>
                        <li>
                          Hypervisors, SAN’s, load balancers, firewalls, and Web
                          Application Firewall (WAF)
                        </li>
                        <li>
                          Experience with Higher Logic (a collaboration
                          platform)
                        </li>
                        <li>MongoDB, Drupal</li>
                        <li>Mobile App Development (iOS and Android)</li>
                        <li>Episerver CMS</li>
                        <li>Microsoft Team Foundation Server</li>
                        <li>Speaker Management System (Planstone)</li>
                      </ul>
                    </span>
                    <div  class="lg:w-3/12">
            <div class="mt-5"><a href="#"  class="rounded-full bg-blue-500 shadow-md text-white px-5 py-3 my-4">Apply Now</a>                             </div>
         </div>
        </div>
        <div class="lg:w-3/12 ">
            <div class="bg-blue-100 mt-4 mt-lg-0 rounded-2xl py-4 px-3 mx-3">
                <span class="mx-2">
                    <p class="text-lg text-center font-semibold">{{org_name}}</p>
                    <p class="text-xsm text-center text-gray-500"><a href="#">View Profile</a></p>
                </span>
                <span class="mx-1">
                    <p class="text-xsm text-gray-500">Industry</p>
                    <p class="font-semibold">{{ "Software" }}</p>
                </span>
                <span class="mx-1">
                    <p class="text-sm text-gray-500">Company size</p>
                    <p class="font-semibold">{{ org_founded }}</p>
                </span>
                <span class="mx-1">
                    <p class="text-sm text-gray-500">Phone</p>
                    <p class="font-semibold">{{org_phone }} to {{salary_max }}/year</p>
                </span>
                <span class="mx-1">
                    <p class="text-sm text-gray-500">Email</p>
                    <p class="font-semibold">{{org_email }} to {{salary_max }}/year</p>
                </span>
                <span class="mx-1">
                    <p class="text-sm text-gray-500">Location</p>
                    <p class="font-semibold">{{org_loc }} to {{salary_max }}/year</p>
                </span>
                <span class="mx-1">
                    <p class="text-sm text-gray-500">Website</p>
                    <p class="font-semibold">{{org_website }} to {{salary_max }}/year</p>
                </span>
                
            </div>
        </div>
    </div>

    
</template>
