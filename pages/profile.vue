<template>
  <div class="profile-layout">
    <ProfileBanner />
    <ProfileMyProfile class="xl:mb-4 xl:shadow" />

    <div class="panel">
      <div class="row">
        <div class="card-left">
          <ProfileIntro />
          <ProfilePhoto />
          <ProfileFriend />
          <ProfileEvent />
          <Footer class="max-xl:hidden my-3" />
        </div>
        <div class="card-right">
          <TimelineNewPost class="profile-page max-xl:pb-2" />
          <ProfilePostManage />
          <TimelinePost class="profile-page" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyProfile',
  layout: 'profile',
}
</script>

<style></style>
