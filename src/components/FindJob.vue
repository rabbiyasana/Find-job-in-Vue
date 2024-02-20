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
                        <input on:input={handlejobTitle} type="text" class="my-2 mx-2 lg:mx-0 focus:outline-none"
                            placeholder="jobtitle or keyword" />

                    </div>
                    <!-- Second Search Bar -->
                    <div class="w-full lg:border-r border-Gray ml-1">
                        <i class="fa fa-globe"></i>
                        <input on:input={handlelocation} type="text" class="my-2 mx-2 lg:mx-0 focus:outline-none"
                            placeholder="Location " />


                    </div>

                    <!-- Dropdown -->
                    <div class=" w-full ml-1">
                        <i class="fa fa-folder"></i>
                        <select class="my-2 mx-2 lg:mx-0 focus:outline-none" @input="handleCategory">
                            <option>All Categories</option>
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
								<span class="text-gray-500">Showing</span> 
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
				
					<div v-for="job in jobs" :key="job.id"  class="rounded-3xl py-5 my-4 px-3 border">
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
                            <div class="lg:w-2/12 sm:w-full mt-4 lg:mt-0s"><router-link :to="'/job/' + job.id" class="rounded-full bg-blue-500 shadow-md text-white px-4 py-2  my-4">Apply</router-link ></div>
						</div>
							
					</div>
			</div>
		</div>
            
</div>
	
</section>

</template>

<script>
import axios from 'axios';
import '../../src/index.css'
export default {
    name: 'FindJob',
    props: {
        head: String
    },
    data(){
        return{
            jobs:[],
            empType : [],
            expLevel:[],
            salaryRange:['Less than 40K Rs',
                        '40K Rs - 60K Rs',
                        '60K Rs - 100K Rs',
                        '100K Rs - 500K Rs',
                        '500K+ Rs',
                        'Custom']
        }
    },
    mounted() {
    this.fetchJobs();
    this.fetchEmplType();
    this.fetchExpLevel();
  },
  computed: {
  uniqueCategories() {
    const allCategories = this.jobs.flatMap(job => job.categories);
    const uniqueCategories = Array.from(new Set(allCategories.map(category => category.id)))
      .map(categoryId => allCategories.find(category => category.id === categoryId));
    return uniqueCategories.slice(0, 6);
  }
},
    methods:{
        async fetchJobs(){
            try{
                const response = await axios.get('http://51.20.72.242/api/v1/jobs/?')
                this.jobs= response.data.data.results

                console.log(this.jobs)
            }catch(error){
                console.error("There was an error fetching the jobs: ", error);
            }
        },
        async fetchEmplType(){
           try{
            const response =  await axios.get("http://51.20.72.242/api/v1/jobs/employment-types/")
            this.empType = response.data.data
           } catch(error){
            console.error("There was an error fetching the jobs: ", error);
           }
        },
        async fetchExpLevel(){
          try{
           const response = await axios.get("http://51.20.72.242/api/v1/jobs/career-levels/");
           this.expLevel= response.data.data
          }catch(error){
            console.error("There was an error fetching the jobs: ", error);
          }
        }
    }
}
</script>