<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal">

        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">
                <slot name="header"></slot>
              </h5>
              <button type="button" class="close" @click="$emit('close')">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <slot></slot>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn red-btn" @click="$emit('close')">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.modal-mask {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-body {
  overflow: auto;
  max-height: 76vh;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal {
  display: block;
  bottom: 0;
  right: 0;
  top: auto;
  width: auto;
  height: auto;
}
</style>
