<script setup>
import { ref, onMounted, computed,watchEffect } from 'vue';
import axios from 'axios';
import '../../src/index.css';

const jobs = ref([]);

const JobTitle = ref('');
const Location = ref('');
const categoryFilter = ref('');

 
const filteredjobs = ref([]);

const empType = ref([]);
const expLevel = ref([]);
const salaryRange = ref([
  'Less than 40K Rs',
  '40K Rs - 60K Rs',
  '60K Rs - 100K Rs',
  '100K Rs - 500K Rs',
  '500K+ Rs',
  'Custom',
]);

    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://51.20.72.242/api/v1/jobs/?');
        jobs.value = response.data.data.results;
      } catch (error) {
        console.error("There was an error fetching the jobs: ", error);
      }
    };

    const fetchEmplType = async () => {
      try {
        const response = await axios.get("http://51.20.72.242/api/v1/jobs/employment-types/");
        empType.value = response.data.data;
      } catch (error) {
        console.error("There was an error fetching the employment types: ", error);
      }
    };

    const fetchExpLevel = async () => {
      try {
        const response = await axios.get("http://51.20.72.242/api/v1/jobs/career-levels/");
        expLevel.value = response.data.data;
      } catch (error) {
        console.error("There was an error fetching the career levels: ", error);
      }
    };
  const filterPosts = () => {
  const title = JobTitle.value.toLowerCase().trim();
  const location = Location.value.toLowerCase().trim();
  const category = categoryFilter.value.toLowerCase().trim();

  filteredjobs.value = jobs.value.filter(job =>
    (job.title?.toLowerCase().trim() || '').includes(title) &&
    (job.organization_address?.toLowerCase().trim() || '').includes(location) &&
    job.categories?.some(cat => cat.name.toLowerCase().trim().includes(category))
  );
};

watchEffect(() => {
  filterPosts(); 
})
const uniqueCategories = computed(() => {
      const allCategories = jobs.value.flatMap(job => job.categories);
      return Array.from(new Set(allCategories.map(category => category.id)))
        .map(categoryId => allCategories.find(category => category.id === categoryId))
        .slice(0, 6);
    });
    onMounted(() => {
      fetchJobs();
      fetchEmplType();
      fetchExpLevel();
       
    });
   
   

</script>
<template>
   <div class="w-full bg-blue-100 p-5 flex justify-around items-stretch content-between">
	<div class="container w-80vw ">
		<div class="mx-5 px-5">
			<h1 class="text-3xl font-semibold">Search Jobs</h1>
		</div>
        <div class="px-5 py-3 bg-white shadow-md rounded-3xl lg:rounded-full  my-5">
            <form>
                <div class="lg:flex justify-between  items-center">
                    <!-- First Search Bar -->
                    <div class=" w-full lg:border-r border-Gray">
                        <input v-model="JobTitle" type="text" class="my-2 mx-2 lg:mx-0 focus:outline-none"
                            placeholder="jobtitle or keyword" />

                    </div>
                   
                    <!-- Second Search Bar -->
                    <div class="w-full lg:border-r border-Gray ml-1">
                        <i class="fa fa-globe"></i>
                        <input v-model="Location" type="text" class="my-2 mx-2 lg:mx-0 focus:outline-none"
                            placeholder="Location " />


                    </div>

                    <!-- Dropdown -->
                    <div class=" w-full ml-1">
                        <i class="fa fa-folder"></i>
                        <select class="my-2 mx-2 lg:mx-0 focus:outline-none" v-model="categoryFilter">
                            <option value="">All Categories</option>
                            <template v-for="category in uniqueCategories" :key="category.id">
                                <option :value="category.name">{{ category.name }}</option>
                            </template>
                        </select>
                    </div>
                    <!-- Submit Button -->
                    <div class="w-full sm:w-full flex-col flex sm:flex-row justify-end items-end">
                        <button type="submit"
                            class=" w-full shadow-md  md:w-auto border rounded-full bg-blue-600 text-white px-5 py-4">Find
                            Jobs</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    </div>
    <section class="w-full p-5 flex justify-center items-center">
<div class="mt-5 container w-80vw ">
		<div class="block lg:flex">
			<div class="m-2 w-full lg:w-3/12">
				<div>
					<div class="flex block lg:hidden">
						<div>Filter Jobs</div>
						<button>
							<span class="fa fa-sliders"></span>
						</button>
					</div>
					<div class="bg-blue-100 mt-4 mt-lg-0 rounded-3xl py-4 px-3">
						<div class="mt-2 mt-lg-3">
							<h4 class="text-xl font-semibold ml-2">Type of Employment</h4>
						</div>
						<div class="mt-2 mt-lg-3 text-gray-500">
                            <div v-for="(Jobtype, index) in empType" :key="index" class="flex p-2 justify-between">
                                <span>
                                <input class="h-4 w-4 rounded appearance-none bg-white accent-blue-500" type="checkbox" />
                                {{ Jobtype.value }}
                                </span>
                                <span class="bg-white rounded-2xl px-2 py-1">0{{ Jobtype.count }}</span>
                            </div>
                            </div>
						<div class="mt-2 mt-lg-3">
							<h4 class="text-xl font-semibold  ml-2">Experience Level</h4>
						</div>
						<div class="mt-2 mt-lg-3 text-gray-500">
							
								<div v-for="exp in expLevel" :key="exp.value"  class="flex p-2 justify-between">
									<span>
										<input class="h-4 w-4 rounded appearance-none bg-white accent-blue-500" type="checkbox" />
										{{exp.value}}
									</span>
									<span class="bg-white rounded-full p-1">0{{exp.count}} </span>
								</div>
						
						</div>
						<div class=" mt-2 mt-lg-3">
							<h4 class="text-xl font-semibold ml-2">Salary Range</h4>
						</div>
						<div class="mt-2 mt-lg-3 text-gray-500">
								<div v-for="(salary, index) in salaryRange" :key="index" class="flex p-2 justify-between">
									<label  >
										<input
											class=" h-4 w-4 appearance-none bg-white rounded-full"
											type="radio"
											name="salary"
											id={{salary}}
											value={{salary}}

										/>
										{{salary}}
									</label>
								</div>
						</div>
					</div>
				</div>
			</div>
			<!-- The job listing part -->
			<div class="m-2 w-full lg:w-9/12">
				<div class=" mt-4 mt-lg-0">
					<div class="flex flex-wrap justify-between ">
						<div class="col-auto">
							<h2 class="text-2xl " >
								<span class="text-gray-500">Showing Total</span> 
								<span class="text-bold ml-1 mr-1">{{jobs.length}}</span>
								<span class="text-gray-500">jobs</span> </h2>
						</div>
						<div class="col-auto">
							<select class="form-select">
								<option value="0" selected> Most relevant </option>
								<option value="1">Newest</option>
								<option value="2">Oldest</option>
							</select>
						</div>
					</div>
				</div>
				
					<div v-for="job in (JobTitle || Location || categoryFilter ? filteredjobs : jobs)" :key="job.id"  class="rounded-3xl py-5 my-4 px-3 border">
						<div  class=" lg:flex py-4 items-equally justify-between">
							<div class="lg:w-2/12 sm:w-full">
								<a href="a">
									<img class="rounded-lg w-20" src={image} alt="" />
								</a>
							</div>
							<div class="lg:w-5/12 sm:w-full">
								<a class=" mt-3 mt-sm-0" href="a">
									<h5 class="text-sm font-semibold">{{job.experience_level}}</h5>
								</a>
								<div class="flex justify-start text-sm">
									<a  href="a">
										<span class="fa fa-globe"></span>
										<b>{{job.organization_address}}</b>
									</a>
									<div class="ml-1 text-sm">
										{{job.employment_type}}
									</div>
								</div>
							</div>
							<div class="text-sm lg:w-3/12 sm:w-full text-left" >
                                <a href="#">
                                    <template v-if="job.categories && job.categories.length">
                                    <div v-for="category in job.categories" :key="category.id">
                                        {{ category.name }}
                                    </div>
                                    </template>
                                </a>
								<span >
										{{job.created_at}}
								</span>
                                <a href="#" class="ml-2"> 
                                    <strong>{{job.organization_name}}</strong>
                                </a>
                            </div>
                            <div class="lg:w-2/12 sm:w-full mt-4 lg:mt-0s">
                                <router-link :to="'/jobdetails/' + job.id" class="rounded-full bg-blue-500 shadow-md text-white px-4 py-2 my-4">Apply</router-link>                             
                           </div>                            
						</div>
							
					</div>
			</div>
		</div>
            
</div>
</section>
</template>