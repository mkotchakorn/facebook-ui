<template>
  <div class="nav-menu-list-dropdown-wrap nav-menu-list-dropdown-menu">
    <p class="pt-3 pl-3 pb-4 capitalize text-2xl font-bold leading-none">
      {{ title }}
    </p>
    <div class="overflow">
      <div class="flex card">
        <div class="card-lf">
          <div class="card-lf-wrap">
            <div class="search mb-4 from-control-icon">
              <input type="text" class="form-control" placeholder="Search Menu" />
              <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="icon w-4 h-4" />
            </div>
            <div class="pb-5 border-b border-line mb-5">
              <p class="font-semibold text-[17px] pb-2">Social</p>
              <div
                v-for="(i, indexSocial) in 5"
                :key="indexSocial"
                class="p-2 flex items-start -ml-2 -mr-2 rounded-lg hover:bg-gray-200 cursor-pointer"
                :class="{ 'relative line-cut mb-4': indexSocial >= i }"
              >
                <img src="http://fakeimg.pl/36x36" class="rounded-lg mr-3" />
                <div class="-mt-1">
                  <div class="text-[15px] font-medium">Title</div>
                  <div class="text-gray-700 text-[13px] leading-none">Aliqua commodo magna id pariatur consectetur cupidatat.</div>
                </div>
              </div>
            </div>

            <div class="pb-5 border-b border-line mb-5">
              <p class="font-semibold text-[17px] pb-2">Entertainment</p>
              <div
                v-for="(i, indexEntertainment) in 3"
                :key="indexEntertainment"
                class="p-2 flex items-start -ml-2 -mr-2 rounded-lg hover:bg-gray-200 cursor-pointer"
              >
                <img src="http://fakeimg.pl/36x36" class="rounded-lg mr-3" />
                <div class="-mt-1">
                  <div class="text-[15px] font-medium">Title</div>
                  <div class="text-gray-700 text-[13px] leading-none">Aliqua commodo magna id pariatur consectetur cupidatat.</div>
                </div>
              </div>
            </div>

            <div class="pb-5 border-b border-line mb-5">
              <p class="font-semibold text-[17px] pb-2">Shopping</p>
              <div
                v-for="(i, indexShopping) in 2"
                :key="indexShopping"
                class="p-2 flex items-start -ml-2 -mr-2 rounded-lg hover:bg-gray-200 cursor-pointer"
              >
                <img src="http://fakeimg.pl/36x36" class="rounded-lg mr-3" />
                <div class="-mt-1">
                  <div class="text-[15px] font-medium">Title</div>
                  <div class="text-gray-700 text-[13px] leading-none">Aliqua commodo magna id pariatur consectetur cupidatat.</div>
                </div>
              </div>
            </div>

            <div class="pb-5 border-b border-line mb-5">
              <p class="font-semibold text-[17px] pb-2">Personal</p>
              <div
                v-for="(i, indexPersonal) in 4"
                :key="indexPersonal"
                class="p-2 flex items-start -ml-2 -mr-2 rounded-lg hover:bg-gray-200 cursor-pointer"
              >
                <img src="http://fakeimg.pl/36x36" class="rounded-lg mr-3" />
                <div class="-mt-1">
                  <div class="text-[15px] font-medium">Title</div>
                  <div class="text-gray-700 text-[13px] leading-none">Aliqua commodo magna id pariatur consectetur cupidatat.</div>
                </div>
              </div>
            </div>

            <div class="pb-5 border-b border-line mb-5">
              <p class="font-semibold text-[17px] pb-2">Personal</p>
              <div
                v-for="(i, indexPersonal) in 4"
                :key="indexPersonal"
                class="p-2 flex items-start -ml-2 -mr-2 rounded-lg hover:bg-gray-200 cursor-pointer"
              >
                <img src="http://fakeimg.pl/36x36" class="rounded-lg mr-3" />
                <div class="-mt-1">
                  <div class="text-[15px] font-medium">Title</div>
                  <div class="text-gray-700 text-[13px] leading-none">Aliqua commodo magna id pariatur consectetur cupidatat.</div>
                </div>
              </div>
            </div>

            <div class="pb-5 border-b border-line mb-5">
              <p class="font-semibold text-[17px] pb-2">Professional</p>
              <div
                v-for="(i, indexProfessional) in 1"
                :key="indexProfessional"
                class="p-2 flex items-start -ml-2 -mr-2 rounded-lg hover:bg-gray-200 cursor-pointer"
              >
                <img src="http://fakeimg.pl/36x36" class="rounded-lg mr-3" />
                <div class="-mt-1">
                  <div class="text-[15px] font-medium">Title</div>
                  <div class="text-gray-700 text-[13px] leading-none">Aliqua commodo magna id pariatur consectetur cupidatat.</div>
                </div>
              </div>
            </div>

            <div class="pb-5 border-b border-line mb-5">
              <p class="font-semibold text-[17px] pb-2">Community resources</p>
              <div
                v-for="(i, indexCommunityResources) in 4"
                :key="indexCommunityResources"
                class="p-2 flex items-start -ml-2 -mr-2 rounded-lg hover:bg-gray-200 cursor-pointer"
              >
                <img src="http://fakeimg.pl/36x36" class="rounded-lg mr-3" />
                <div class="-mt-1">
                  <div class="text-[15px] font-medium">Title</div>
                  <div class="text-gray-700 text-[13px] leading-none">Aliqua commodo magna id pariatur consectetur cupidatat.</div>
                </div>
              </div>
            </div>

            <div class="pb-0">
              <p class="font-semibold text-[17px] pb-2">More from Meta</p>
              <div
                v-for="(i, indexMoreFromMeta) in 2"
                :key="indexMoreFromMeta"
                class="p-2 flex items-start -ml-2 -mr-2 rounded-lg hover:bg-gray-200 cursor-pointer"
              >
                <img src="http://fakeimg.pl/36x36" class="rounded-lg mr-3" />
                <div class="-mt-1">
                  <div class="text-[15px] font-medium">Title</div>
                  <div class="text-gray-700 text-[13px] leading-none">Aliqua commodo magna id pariatur consectetur cupidatat.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card-rt">
          <div class="card-rt-wrap">
            <p class="title -mt-1 -ml-1 pb-4 font-bold text-xl leading-none">Create</p>
            <div
              v-for="(i, indexCreate) in 9"
              :key="indexCreate"
              class="p-2 flex items-center -ml-2 -mr-2 rounded-lg hover:bg-gray-200 cursor-pointer"
              :class="{ 'relative line-cut mb-4': indexCreate + 1 == 4 }"
            >
              <img src="http://fakeimg.pl/36x36" class="rounded-full mr-3" />
              <span class="text-[15px] font-medium capitalize">Title</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarMenuDropdownMenu',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
