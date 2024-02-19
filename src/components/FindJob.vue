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
                        <i class="fa fa-search"></i>
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
                        <select class="my-2 mx-2 lg:mx-0 focus:outline-none" on:input={handleCategory}>
                            <option>All Categories</option>
                            {#each $jobs as job}
                            {#if job.categories && job.categories.length > 0}
                            {#each job.categories.slice(0, 6) as category, index (category.id)}
                            <option value={category.name}>{category.name}</option>

                            {/each}
                            {/if}

                            {/each}
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
</template>

<script>
import '../../src/index.css'
export default {
    name: 'FindJob',
    props: {
        head: String
    }
}
</script>