<template>
    <table id="table"></table>
</template>

<script>
import datatable from 'datatables';
import $ from 'jquery';

export default {
    name: 'datatable',
    mounted(){
        $('#table').dataTable();
    }
}
</script>
