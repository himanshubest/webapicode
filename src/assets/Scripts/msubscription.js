
function m_Downloadscript() {
    var landingZoneName = $("#landingZoneName").val();
    window.open('/MultiSubscription/DownloadTerraformScript?landingZoneName=' + landingZoneName);
    swal("The Terraform script was downloaded successfully.", "", "success");
}

function getParam(key) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(key);
}
function displayErrorMessage(elementId, message) {
    //$('#' + elementId).addClass('error');
    $('#' + elementId + '_error').remove();
    $('#' + elementId).after('<span id="' + elementId + '_error" class="error-msg">' + message + '</span>');
}
function hideErrorMessage(elementId) {
    $('#' + elementId).removeClass('error');
    $('#' + elementId + '_error').remove();
}
//
function revValid(isValid) {
    return !isValid;
}
$(function () {
    //disable hub
    $('#addNewSubs_MultiS').on('click', function () {
        $("#substable tbody tr").each(function () {
            debugger;
            var subsType = $(this).find("td:nth-child(6)").text();
            if (subsType == 'Hub')
                $("#subscriptiontype option:contains('Hub')").prop("disabled", true);
            else
                $("#subscriptiontype option:contains('Hub')").prop("disabled", false);
        });
    });
    //$('#m_Confrminfo').modal('hide');
    //script to collapse
    $(".hideshowd").click(function () {
        var divElement = $(this).parent().nextAll("div").first();
        divElement.toggle();
    });
    //create subscription table
    $("#addNewSubscription").click(function () {
        var subscriptionId = $("#subscriptionid").val();
        var client_id = $("#client_id").val();
        var client_secret = $("#client_secret").val();
        var tenant_id = $("#tenant_id").val();
        var subscriptionName = $("#subscriptionname").val();
        var subscriptionType = $("#subscriptiontype").val();
        var environment = $("#envtype").val();
        //var rowcount = $("#subsdetails tr").length + 1;
        var isValid = true;
        if (subscriptionName.trim() === '') {
            isValid = false;
            displayErrorMessage('subscriptionname', 'Subscription Name is required.');
        } else {
            hideErrorMessage('subscriptionname');
        }
        if (subscriptionId.trim() === '') {
            isValid = false;
            displayErrorMessage('subscriptionid', 'Subscription ID is required.');
        } else {
            hideErrorMessage('subscriptionid');
        }
        if (client_id.trim() === '') {
            isValid = false;
            displayErrorMessage('client_id', 'Client ID is required.');
        } else {
            hideErrorMessage('client_id');
        }
        if (client_secret.trim() === '') {
            isValid = false;
            displayErrorMessage('client_secret', 'Client Secret is required.');
        } else {
            hideErrorMessage('client_secret');
        }
        if (tenant_id.trim() === '') {
            isValid = false;
            displayErrorMessage('tenant_id', 'Tenant ID is required.');
        } else {
            hideErrorMessage('tenant_id');
        }
        if (subscriptionType === '0') {
            isValid = false;
            displayErrorMessage('subscriptiontype', 'Please select a Subscription Type.');
        } else {
            hideErrorMessage('subscriptiontype');
        }
        if (environment === '0') {
            isValid = false;
            displayErrorMessage('envtype', 'Please select an Environment Type.');
        } else {
            hideErrorMessage('envtype');
        }
        if (!isValid) {
            return false;
        }
        var row = "<tr><td>" + subscriptionName + "</td><td>" + subscriptionId + "</td><td>" + client_id + "</td><td>" + client_secret + "</td><td>" + tenant_id + "</td><td>" + subscriptionType + "</td><td>" + environment + "</td><td> <button class='btn btn-primary editsubs' >Edit</button> <button class='btn btn-danger deletesubs' >Delete</button></td></tr>";
        $("#subsdetails").append(row);

        $("#subscriptionid, #subscriptionname,#client_id,#client_secret, #tenant_id").val("");
        $("#subscriptiontype, #envtype").val("0");
        $("#substable tbody tr").each(function () {
            var subsType = $(this).find("td:nth-child(6)").text();
            if (subsType == 'Hub')
                $("#subscriptiontype option:contains('Hub')").prop("disabled", true);
        });
    });
    //Edit subscription table
    var crow = "";
    $("#subsdetails").on("click", ".editsubs", function () {
        $("#updateSubscription").show();
        $("#subscriptionModal").modal("show");
        $("#addNewSubscription").hide();
        crow = $(this).closest("tr");
        var subscriptionName = crow.find("td:eq(0)").text();
        var subscriptionId = crow.find("td:eq(1)").text();
        var clientId = crow.find("td:eq(2)").text();
        var clientSecret = crow.find("td:eq(3)").text();
        var tenantId = crow.find("td:eq(4)").text();
        var subscriptionType = crow.find("td:eq(5)").text();
        var environment = crow.find("td:eq(6)").text();
        $("#subscriptionid").val(subscriptionId);
        $("#subscriptionname").val(subscriptionName);
        $("#client_id").val(clientId);
        $("#client_secret").val(clientSecret);
        $("#tenant_id").val(tenantId);
        $("#subscriptiontype").val(subscriptionType);
        $("#envtype").val(environment);
    });
    //Update subscription table
    $("#updateSubscription").click(function () {
        var subscriptionId = $("#subscriptionid").val();
        var subscriptionName = $("#subscriptionname").val();
        var subscriptionType = $("#subscriptiontype").val();
        var environment = $("#envtype").val();
        var clientId = $("#client_id").val();
        var clientSecret = $("#client_secret").val();
        var tenantId = $("#tenant_id").val();

        crow.find("td:eq(0)").text(subscriptionName);
        crow.find("td:eq(1)").text(subscriptionId);
        crow.find("td:eq(2)").text(clientId);
        crow.find("td:eq(3)").text(clientSecret);
        crow.find("td:eq(4)").text(tenantId);
        crow.find("td:eq(5)").text(subscriptionType);
        crow.find("td:eq(6)").text(environment);

        $("#subscriptionid, #tenant_id, #client_id, #client_secret,#subscriptionname").val("");
        $("#subscriptiontype, #envtype").val("0");

        $("#subscriptionModal").modal("hide");
        $("#updateSubscription").hide();
        $("#addNewSubscription").show();
    });
    //delete subscription table
    $("#subsdetails").on("click", ".deletesubs", function () {
        row = $(this).closest("tr");
        row.remove();
    });
    //removing the data from the table
    $(document).on("click", ".delete_tbl_res", function () {
        row = $(this).closest("tr");
        var divId = row.closest("div").attr("id");
        var tableId = row.closest("table").attr("id");
        row.remove();

        if ($("#" + tableId + " tbody tr").length === 0) {
            $("#" + divId).hide();
        }
    });
    //adding new rg
    $("#addNewResGroup_forMulti").on("click", function () {
        $("#divAddNewResourceGroup_MultiS").modal("show");
        $("#divServiceNetworking_MultiS").modal("hide");
    });
    //show the model for all the resources
    $(".addnewresource_multi").on("click", function () {
        $("#VNetModelDetail_MultiS, #RouteTableModelDetail_MultiS, #FirewallModelDetail_MultiS,#LoadBalancerModelDetail_MultiS, #KeyVaultModelDetail_MultiS, #NetSecurityGrpModelDetail_MultiS, #StorageAccountModelDetail_MultiS, #NetworkwatcherModelDetail_MultiS, #AzureBastionModelDetail_MultiS, #LogAnalyticsModelDetail_MultiS").css("display", "none");
        append_rg_dropdown();
        subs_rg();
        empty_all_fields();
        switch (this.id) {
            case "addNewResGroup_MultiS":
                $("#divAddNewResourceGroup_MultiS").modal("show");
                $(".error-msg").remove();
                break;
            case "addNewSubNet_MultiS":
                $("#divAddSubNet_MultiS").modal("show");
                $(".error-msg").remove();
                break;
            case "addNewVNet_MultiS":
                $("#newServiceNetworking_MultiS").text("Create a Virtual Network");
                $("#divServiceNetworking_MultiS").modal('show');
                $("#VNetModelDetail_MultiS").css("display", "block");
                $(".error-msg").remove();
                break;
            case "addNewLoadBalancer_MultiS":
                $("#newServiceNetworking_MultiS").text("Create a Load Balancer");
                $("#divServiceNetworking_MultiS").modal('show');
                $("#LoadBalancerModelDetail_MultiS").css("display", "block");
                $(".error-msg").remove();
                break;
            case "addNewLogAnalytics_MultiS":
                $("#newServiceNetworking_MultiS").text("Create a Log Analytics");
                $("#divServiceNetworking_MultiS").modal('show');
                $("#LogAnalyticsModelDetail_MultiS").css("display", "block");
                $(".error-msg").remove();
                break;
            case "addNewFirewall_MultiS":
                $("#newServiceNetworking_MultiS").text("Create a Firewall");
                $("#divServiceNetworking_MultiS").modal('show');
                $("#FirewallModelDetail_MultiS").css("display", "block");
                $(".error-msg").remove();
                break;
            case "addNewRT_MultiS":
                $("#newServiceNetworking_MultiS").text("Create a Route Table");
                $("#divServiceNetworking_MultiS").modal('show');
                $("#RouteTableModelDetail_MultiS").css("display", "block");
                $(".error-msg").remove();
                break;
            case "addNewKVault_MultiS":
                $("#newServiceNetworking_MultiS").text("Create a Key Vault");
                $("#divServiceNetworking_MultiS").modal('show');
                $("#KeyVaultModelDetail_MultiS").css("display", "block");
                $(".error-msg").remove();
                break;
            case "addNewNetworkSecurityGroup_MultiS":
                $("#newServiceNetworking_MultiS").text("Create a Network Security Group");
                $("#divServiceNetworking_MultiS").modal('show');
                $("#NetSecurityGrpModelDetail_MultiS").css("display", "block");
                $(".error-msg").remove();
                break;
            case "addNewStorageAccount_MultiS":
                $("#newServiceNetworking_MultiS").text("Create a Storage Account");
                $("#divServiceNetworking_MultiS").modal('show');
                $("#StorageAccountModelDetail_MultiS").css("display", "block");
                $(".error-msg").remove();
                break;
            case "addNewAB_MultiS":
                $("#newServiceNetworking_MultiS").text("Create a Azure Bastion");
                $("#divServiceNetworking_MultiS").modal('show');
                $("#AzureBastionModelDetail_MultiS").css("display", "block");
                $(".error-msg").remove();
                break;
        }
    });
    //dropdown Adding subscription lists
    $(".addnewresource_multi").on("click", function () {
        var subscriptionNames = [];
        var subscriptionIDs = [];

        $("#substable tbody tr").each(function () {
            var name = $(this).find("td:nth-child(2)").text();
            var id = $(this).find("td:nth-child(3)").text();
            subscriptionNames.push(name);
            subscriptionIDs.push(id);
        });
        var dropdownOptions = "<option value='0'>--Please Select--</option>";
        for (var i = 0; i < subscriptionNames.length; i++) {
            //dropdownOptions += "<option value='" + subscriptionIDs[i] + "'>" + subscriptionNames[i] + "</option>";
            dropdownOptions += "<option value='" + subscriptionNames[i] + "'>" + subscriptionNames[i] + "</option>";
        }
        var targetElement = $("#rgsubs");
        targetElement.html(dropdownOptions);
    });
    //dropdown subnet
    $("#addNewNetworkSecurityGroup_MultiS").on("click", function () {
        var columnValues = [];
        $('#tbl_subnet_mul tbody tr').each(function () {
            var value = $(this).find('td:eq(0)').text();
            columnValues.push(value);
        });
        var dropdown = $('#nsg_ass_subnet');
        dropdown.empty();
        dropdown.append($('<option>').text('---Please Select---'));
        $.each(columnValues, function (index, value) {
            dropdown.append($('<option>').text(value));
        });
        //dropdown.on('change', function() {
        //    var selectedValue = $(this).val();
        //});
    });
    //adding resourceGroup_Details group
    $("#addNewResGp_Multi").on('click', function () {
        var subscriptionId = $('#rgsubs :selected').val();
        var res_gp = $('#txtResGP_Name_MultiS').val();
        var region = $('#RegionForAddNewRG_MultiS :selected').text();
        var isValid = true;

        if (subscriptionId === '0') {
            isValid = false;
            if ($("#rgsubs option").length == 1) {
                displayErrorMessage('rgsubs', "You don't have any subscription, Please provide first!");
            } else {
                displayErrorMessage('rgsubs', 'Please select Subscription.');
            }
        } else {
            hideErrorMessage('rgsubs');
        }
        if (res_gp.trim() === '') {
            isValid = false;
            displayErrorMessage('txtResGP_Name_MultiS', 'Resource Group is required.');
        } else {
            hideErrorMessage('txtResGP_Name_MultiS');
        }
        if (region === '---Please Select---') {
            isValid = false;
            displayErrorMessage('RegionForAddNewRG_MultiS', 'Please select a Region.');
        } else {
            hideErrorMessage('RegionForAddNewRG_MultiS');
        }

        if (revValid(isValid)) {
            return false;
        }
        var mul_rg = '<tr><td>' + res_gp + '</td> <td> ' + region + '</td> <td> ' + subscriptionId + '</td> <td> <a class="btn btn-danger delete_tbl_res" >Delete</a> </td></tr>';
        $("#tbl_rg_mul").append(mul_rg);
        $("#div_rg_mul").css('display', 'block');
    });
    //adding vnet details
    $("#AddNewVNetService_Multi").on('click', function () {
        var subscriptionId = $('#rgsubs :selected').text();
        var vnet_name = $('#txtVnet_Name_Multi').val();
        var vnet_address = $('#txtVnet_AddressSpace_Multi').val();
        var res_gp = $('#selectAddNewRes_Group_multi option:selected').text().trim();
        var region = $('#RegionForVnet_Multi :selected').text();
        var isValid = true;
        if (res_gp === '---Please Select---') {
            isValid = false;
            displayErrorMessage('selectAddNewRes_Group_multi', 'Please select resource group.');
        } else {
            hideErrorMessage('selectAddNewRes_Group_multi');
        }
        if (vnet_name.trim() === '') {
            isValid = false;
            displayErrorMessage('txtVnet_Name_Multi', 'Vnet name is required.');
        } else {
            hideErrorMessage('txtVnet_Name_Multi');
        }
        if (vnet_address.trim() === '') {
            isValid = false;
            displayErrorMessage('txtVnet_AddressSpace_Multi', 'IPv4 Address Space is required.');
        } else {
            hideErrorMessage('txtVnet_AddressSpace_Multi');
        }
        if (region === '---Please Select---') {
            isValid = false;
            displayErrorMessage('RegionForVnet_Multi', 'Please select region.');
        } else {
            hideErrorMessage('RegionForVnet_Multi');
        }
        if (revValid(isValid)) {
            return false;
        }

        var mul_vnet = '<tr><td>' + vnet_name + '</td> <td> ' + res_gp + '</td> <td> ' + region + '</td> <td> ' + vnet_address + '</td> <td> <a class="btn btn-danger delete_tbl_res" >Delete</a> </td></tr>';
        $("#tbl_vnet_mul").append(mul_vnet);
        $("#div_vnet_mul").css('display', 'block');
        var d = '<option value=' + vnet_name + ' selected>' + vnet_name + '</option>';
        $("#vnetNames, #Vnet_Firewall_Multi, #Vnet_AzureBastion_Multi").append(d);

        $("#addNewSubnetTable_multi tbody").find("tr").each(function () {
            var subnet_name = $(this).find("td").eq('0').text();
            var subnet_address = $(this).find("td").eq('1').text();
            var mul_subnet = '<tr><td>' + subnet_name + '</td> <td> ' + vnet_name + '</td> <td> ' + subnet_address + '</td> <td> <a class="btn btn-danger delete_tbl_res" >Delete</a> </td></tr>';
            $("#tbl_subnet_mul").append(mul_subnet);
        });
        $("#div_subnet_mul").css('display', 'block');


    });
    //adding Subnet details
    $("#addNewSubnet_Multi").on('click', function () {
        var rowcount = $("#addNewSubnetTable_multi tr").length;
        $("#divAddNewSubnet_Multi").modal('show');
        $("#txtSubnet_Name_Multi").val("");
        $("#txtSubnet_AddressRange_Multi").val("");
        hideErrorMessage('txtSubnet_AddressRange_Multi');//valid
    });
    //adding Single Subnet details
    $("#addNewSubnet_single_Multi").on('click', function () {
        var vnet_name = $('#vnetNames :selected').text().trim();
        var subnet_name = $('#txtSubnet_Name_MultiS').val();
        var subnet_address = $('#txtSubnet_Address_MultiS').val();
        var isValid = true;
        if (vnet_name === '--Please Select--') {
            isValid = false;
            displayErrorMessage('vnetNames', 'Please select Vnet.');
        } else {
            hideErrorMessage('vnetNames');
        }
        if (subnet_name === '') {
            isValid = false;
            displayErrorMessage('txtSubnet_Name_MultiS', 'Subnet name is required.');
        } else {
            hideErrorMessage('txtSubnet_Name_MultiS');
        }
        if (subnet_address === '') {
            isValid = false;
            displayErrorMessage('txtSubnet_Address_MultiS', 'Subnet address is required.');
        } else {
            hideErrorMessage('txtSubnet_Address_MultiS');
        }
        if (revValid(isValid)) {
            return false;
        }
        var mul_subnet = '<tr><td>' + subnet_name + '</td> <td> ' + vnet_name + '</td> <td> ' + subnet_address + '</td> <td> <a class="btn btn-danger delete_tbl_res" >Delete</a> </td></tr>';
        $("#tbl_subnet_mul").append(mul_subnet);
        $("#div_subnet_mul").css('display', 'block');
    });
    //removing Subnet details
    $("#RemoveSubnet").on('click', function () {
        var rowcount = $("#addNewSubnetTable_multi tr").length;
        if (rowcount == 2) {
            $('#addNewSubnetTable_multi tr:last').remove();
        }
        else if (rowcount == 1) {
            swal("You do not have a subnet to delete."); //valid
        }
    });
    //Adding Subnet for vnet
    var subnetCount = 1;
    $("#addNewSubnetDetail_Multi").on('click', function () {
        debugger
        var IP4Addressspace = $("#txtVnet_AddressSpace_Multi").val();
        var splitAddressspce = IP4Addressspace.split('.');
        var arr0 = splitAddressspce[0];
        var arr1 = splitAddressspce[1];
        var arr2 = splitAddressspce[2];

        var SubnetAddressspace = $("#txtSubnet_AddressRange_Multi").val();
        var splitSubAddressspce = SubnetAddressspace.split('.');
        var sarr0 = splitSubAddressspce[0];
        var sarr1 = splitSubAddressspce[1];
        var sarr2 = splitSubAddressspce[2];

        var isValid = true;
        if ($("#txtSubnet_Name_Multi").val() === '') {
            isValid = false;
            displayErrorMessage('txtSubnet_Name_Multi', 'Subnet name is required.');
        } else {
            hideErrorMessage('txtSubnet_Name_Multi');
        }
        if (SubnetAddressspace.trim() === '') {
            isValid = false;
            displayErrorMessage('txtSubnet_AddressRange_Multi', 'Subnet Address Range is required.');
        } else {
            hideErrorMessage('txtSubnet_AddressRange_Multi');
        }
        if (revValid(isValid)) {
            return false;
        }

        if (arr0 == sarr0 && arr1 == sarr1) {
            var subnetname = $("#txtSubnet_Name_Multi").val();
            var subnetaddressrange = $("#txtSubnet_AddressRange_Multi").val();
            //var data = '<tr id="divSubnet' + subnetCount + '"><td><input type="checkbox" name="record"></td><td id="txtSubnet_Name_Multi' + subnetCount + '">' + subnetname + '</td>' +
            //    '<td id="txtSubnet_AddressSpace_Custom' + subnetCount + '">' + subnetaddressrange + '</td></tr>';
            var data = '<tr id="divSubnet' + subnetCount + '"><td id="txtSubnet_Name_Multi' + subnetCount + '">' + subnetname + '</td>' +
                '<td id="txtSubnet_AddressSpace_Custom' + subnetCount + '">' + subnetaddressrange + '</td>' +
                ' <td> <a class="btn btn-danger delete_tbl_res" >Delete</a> </td></tr>';
            $("#addNewSubnetTable_multi").append(data);
            subnetCount++;
        }
        else {
            displayErrorMessage('txtSubnet_AddressRange_Multi', 'The subnet IP range does not match.');//valid
            return false;
        }
    });
    //adding load balancer details
    $("#AddNewLoadBalancerService_Multi").on('click', function () {
        var lb_name = $('#txtLoadBalancer_Name_Multi').val();
        var res_gp = $('#selectAddNewRes_Group_multi option:selected').text().trim();
        var region = $('#RegionForLoadBalancer_Multi :selected').text();
        var lb_sku = $('input[name="lbSKU_name"]:checked').val();
        var lb_type = $('input[name="lbType_name"]:checked').val();
        var lb_pip = $('#PublicIP_Loadbalancer_Multi').val();
        var isValid = true;
        if (res_gp === '---Please Select---') {
            isValid = false;
            displayErrorMessage('selectAddNewRes_Group_multi', 'Please select resource group.');
        } else {
            hideErrorMessage('selectAddNewRes_Group_multi');
        }
        if (lb_name.trim() === '') {
            isValid = false;
            displayErrorMessage('txtLoadBalancer_Name_Multi', 'Load Balancer name is required.');
        } else {
            hideErrorMessage('txtLoadBalancer_Name_Multi');
        }
        if (region === '---Please Select---') {
            isValid = false;
            displayErrorMessage('RegionForLoadBalancer_Multi', 'Please select a Region.');
        } else {
            hideErrorMessage('RegionForLoadBalancer_Multi');
        }

        if (lb_pip.trim() === "") {
            isValid = false;
            displayErrorMessage('PublicIP_Loadbalancer_Multi', 'Public IP Address name is required.');
        } else {
            hideErrorMessage('PublicIP_Loadbalancer_Multi');
        }
        if (revValid(isValid)) {
            return false;
        }
        var mul_lb = '<tr><td>' + lb_name + '</td> <td> ' + res_gp + '</td> <td> ' + region + '</td> <td> ' + lb_sku + '</td> <td> ' + lb_type + '</td> <td> ' + lb_pip + '</td> <td> <a class="btn btn-danger delete_tbl_res" >Delete</a> </td></tr>';
        $("#tbl_lb_mul").append(mul_lb);
        $("#div_lb_mul").css('display', 'block');
    });
    //adding LogAnalytics details
    $("#AddNewLogAnalyticsService_Multi").on('click', function () {
        var la_name = $('#txtLogAnalytics_Name_Multi').val();
        var res_gp = $('#selectAddNewRes_Group_multi option:selected').text().trim();
        var region = $('#RegionForLogAnalytics_Multi :selected').text();
        var isValid = true;
        if (res_gp === '---Please Select---') {
            isValid = false;
            displayErrorMessage('selectAddNewRes_Group_multi', 'Please select resource group.');
        } else {
            hideErrorMessage('selectAddNewRes_Group_multi');
        }
        if (la_name.trim() === '') {
            isValid = false;
            displayErrorMessage('txtLogAnalytics_Name_Multi', 'Log Analytics name is required.');
        } else {
            hideErrorMessage('txtLogAnalytics_Name_Multi');
        }
        if (region === '---Please Select---') {
            isValid = false;
            displayErrorMessage('RegionForLogAnalytics_Multi', 'Please select a Region.');
        } else {
            hideErrorMessage('RegionForLogAnalytics_Multi');
        }
        if (revValid(isValid)) {
            return false;
        }
        var mul_la = '<tr><td>' + la_name + '</td> <td> ' + res_gp + '</td> <td> ' + region + '</td> <td> <a class="btn btn-danger delete_tbl_res" >Delete</a> </td></tr>';
        $("#tbl_la_mul").append(mul_la);
        $("#div_la_mul").css('display', 'block');
    });
    //show azure firewall policy model
    $("#add_FirewallPolicy_Multi").on('click', function () {
        $("#txtfwpolicy_Multi").val("");
        $('#RegionForFirewall_Multi1 option').prop('selected', function () {
            return this.defaultSelected;
        });
        $("#divAddNewFwPolicy_Multi").modal('show');
    });
    //adding Azure firewall policy details
    $("#addNewFwPolicy_Multi").on('click', function () {
        var fire_name = $('#txtfwpolicy_Multi').val();
        var region = $('#RegionForFirewall_Multi :selected').text();
        var isValid = true;
        if (fire_name === '') {
            isValid = false;
            displayErrorMessage('txtfwpolicy_Multi', 'Policy name is required.');
        } else {
            hideErrorMessage('txtfwpolicy_Multi');
        }
        if (region === '---Please Select---') {
            isValid = false;
            displayErrorMessage('RegionForFirewall_Multi1', 'Please select a Region..');
        } else {
            hideErrorMessage('RegionForFirewall_Multi1');
        }
        if (revValid(isValid)) {
            return false;
        }
        var f = '<option value=' + fire_name + ' selected>' + fire_name + '</option>';
        $("#FwPolicy_Firewall_Multi").append(f);
    });
    //show vnet model for firewall and azb
    $(".addNewSubService_Multi_Vnet").on('click', function () {
        vnetcurrent = this.id;
        if (this.id == "add_FirewallVnet_Multi") {
            $("#divAddNewVnet_Multi").modal('show');
            $("#txt_Subnet_Name_Multi").val("AzureFirewallSubnet");
            $("#txt_Subnet_Name_Multi").attr("disabled", "disabled");
        }
        if (this.id == "add_AzureBastionVnet_Multi") {
            $("#txt_Vnet_Name_Multi").val("");
            $("#txt_Vnet_AddressRange_Multi").val("");
            $("#txt_Subnet_AddressRange_Multi").val("");
            $("#divAddNewVnet_Multi").modal('show');
            $("#txt_Subnet_Name_Multi").val("AzureBastionSubnet");
            $("#txt_Subnet_Name_Multi").attr("disabled", "disabled");
        }
    });
    //Add new vnet for firewall  and azurebastion
    var vnetcurrent;
    $("#addNewVnetDetail_Multi").on('click', function () {
        var vnet_name = $("#txt_Vnet_Name_Multi").val();
        var vnet_addressspace = $("#txt_Vnet_AddressRange_Multi").val();
        var subnet_name = $("#txt_Subnet_Name_Multi").val();
        var subnet_addressspace = $("#txt_Subnet_AddressRange_Multi").val();
        var res_gp = $('#selectAddNewRes_Group_multi :selected').text();
        var region;

        var isValid = true;
        if (vnet_name === '') {
            isValid = false;
            displayErrorMessage('txt_Vnet_Name_Multi', 'Vnet name is required.');
        } else {
            hideErrorMessage('txt_Vnet_Name_Multi');
        }
        if (vnet_addressspace.trim() === '') {
            isValid = false;
            displayErrorMessage('txt_Vnet_AddressRange_Multi', 'Vnet Address Range is required.');
        } else {
            hideErrorMessage('txt_Vnet_AddressRange_Multi');
        }
        if (subnet_addressspace.trim() === '') {
            isValid = false;
            displayErrorMessage('txt_Subnet_AddressRange_Multi', 'Subnet Address Range is required.');
        } else {
            hideErrorMessage('txt_Subnet_AddressRange_Multi');
        }
        if (revValid(isValid)) {
            return false;
        }

        var d = '<option value=' + vnet_name + ' selected>' + vnet_name + '</option>';
        $("#vnetNames, #Vnet_Firewall_Multi, #Vnet_AzureBastion_Multi").append(d);
        //if ($("#txt_Vnet_Name_Multi").val() == "") {
        //    swal("Please Enter Vnet Name");
        //    return false;
        //}
        //if ($("#txt_Vnet_AddressRange_Multi").val() == "") {
        //    swal("Please Enter Vnet Address Range");
        //    return false;
        //}
        //if ($("#txt_Subnet_AddressRange_Multi").val() == "") {
        //    swal("Please Enter Subnet Address Range");
        //    return false;
        //}
        if (vnetcurrent == "add_FirewallVnet_Multi") {
            region = $('#RegionForFirewall_Multi :selected').text();
            $("#txt_Vnet_Name_Multi").val("");
            $("#txt_Vnet_AddressRange_Multi").val("");
            $("#txt_Subnet_AddressRange_Multi").val("");
            $("#txtFirewall_AddressSpace_Multi").val(vnet_addressspace);
            $("#txtFirewall_Subnet_Name_Multi").val(subnet_name);
            $("#txtFirewall_Subnet_AddressSpace_Multi").val(subnet_addressspace);
        }
        if (vnetcurrent == "add_AzureBastionVnet_Multi") {
            region = $('#RegionForAzureBastion_Multi :selected').text();
            $("#txtAzureBastion_AddressSpace_Multi").val(vnet_addressspace);
        }
        var mul_vnet = '<tr><td>' + vnet_name + '</td> <td> ' + res_gp + '</td> <td> ' + region + '</td> <td> ' + vnet_addressspace + '</td> <td> <a class="btn btn-danger delete_tbl_res" >Delete</a> </td></tr>';
        $("#tbl_vnet_mul").append(mul_vnet);
        var mul_subnet = '<tr><td>' + subnet_name + '</td> <td> ' + vnet_name + '</td> <td> ' + subnet_addressspace + '</td> <td> <a class="btn btn-danger delete_tbl_res" >Delete</a> </td></tr>';
        $("#tbl_subnet_mul").append(mul_subnet);
    });
    //adding Firewall details
    $("#AddNewFirewallService_Multi").on('click', function () {
        var fw_name = $('#txtFirewall_Name_Multi').val();
        var res_gp = $('#selectAddNewRes_Group_multi :selected').text().trim();
        var region = $('#RegionForFirewall_Multi :selected').text();
        var sku_fw = $('#sku_tier_Firewall_Multi :selected').text();
        var vnet_name = $('#Vnet_Firewall_Multi :selected').text();
        var pip_name = $('#PublicIP_Firewall_Multi').val();
        var isValid = true;
        if (res_gp === '---Please Select---') {
            isValid = false;
            displayErrorMessage('selectAddNewRes_Group_multi', 'Please select resource group.');
        } else {
            hideErrorMessage('selectAddNewRes_Group_multi');
        }
        if (fw_name.trim() === '') {
            isValid = false;
            displayErrorMessage('txtFirewall_Name_Multi', 'Firewall name is required.');
        } else {
            hideErrorMessage('txtFirewall_Name_Multi');
        }
        if (pip_name.trim() === '') {
            isValid = false;
            displayErrorMessage('PublicIP_Firewall_Multi', 'Public IP Address name is required.');
        } else {
            hideErrorMessage('PublicIP_Firewall_Multi');
        }
        if ($("#txtFirewall_Subnet_AddressSpace_Multi").val().trim() === '') {
            isValid = false;
            displayErrorMessage('txtFirewall_Subnet_AddressSpace_Multi', 'Subnet Address Space is required.');
        } else {
            hideErrorMessage('txtFirewall_Subnet_AddressSpace_Multi');
        }
        if (region === '---Please Select---') {
            isValid = false;
            displayErrorMessage('RegionForFirewall_Multi', 'Please select a Region.');
        } else {
            hideErrorMessage('RegionForFirewall_Multi');
        }
        if (vnet_name === 'Choose Virtual Network') {
            isValid = false;
            displayErrorMessage('Vnet_Firewall_Multi', 'Please select a Virtual Network.');
        } else {
            hideErrorMessage('Vnet_Firewall_Multi');
        }
        if (revValid(isValid)) {
            return false;
        }
        var mul_fw = '<tr><td>' + fw_name + '</td> <td> ' + res_gp + '</td> <td> ' + region + '</td> <td> ' + sku_fw + '</td> <td> ' + vnet_name + '</td> <td> ' + pip_name + '</td> <td> <a class="btn btn-danger delete_tbl_res" >Delete</a> </td></tr>';
        $("#tbl_fw_mul").append(mul_fw);
        $("#div_fw_mul").css('display', 'block');
    });
    //adding Route Table details
    $("#AddNewRouteTableService_Multi").on('click', function () {
        var rt_name = $('#txtRT_Name_Multi').val();
        var res_gp = $('#selectAddNewRes_Group_multi :selected').text().trim();
        var region = $('#RegionForRouteTable_Multi :selected').text();
        var isValid = true;
        if (res_gp === '---Please Select---') {
            isValid = false;
            displayErrorMessage('selectAddNewRes_Group_multi', 'Please select resource group.');
        } else {
            hideErrorMessage('selectAddNewRes_Group_multi');
        }
        if (rt_name === '') {
            isValid = false;
            displayErrorMessage('txtRT_Name_Multi', 'Route Table name is required.');
        } else {
            hideErrorMessage('txtRT_Name_Multi');
        }
        if (region === '---Please Select---') {
            isValid = false;
            displayErrorMessage('RegionForRouteTable_Multi', 'Please select a Region.');
        } else {
            hideErrorMessage('RegionForRouteTable_Multi');
        }
        if (revValid(isValid)) {
            return false;
        }
        var mul_rt = '<tr><td>' + rt_name + '</td> <td> ' + res_gp + '</td> <td> ' + region + '</td> <td> <a class="btn btn-danger delete_tbl_res" >Delete</a> </td></tr>';
        $("#tbl_rt_mul").append(mul_rt);
        $("#div_rt_mul").css('display', 'block');
    });
    //adding Key Vault details
    $("#AddNewKeyVaultService_Multi").on('click', function () {
        var kv_name = $('#txtKeyVault_Name_Multi').val();
        var res_gp = $('#selectAddNewRes_Group_multi :selected').text().trim();
        var region = $('#RegionForKVault_Multi :selected').text();
        var sku = $('#skuForKVault_Multi :selected').text();
        var retaintion = $('#txtRetainDeleteVault_Name_Multi').val();
        var isValid = true;
        if (res_gp === '---Please Select---') {
            isValid = false;
            displayErrorMessage('selectAddNewRes_Group_multi', 'Please select resource group.');
        } else {
            hideErrorMessage('selectAddNewRes_Group_multi');
        }
        if (kv_name === '') {
            isValid = false;
            displayErrorMessage('txtKeyVault_Name_Multi', 'Key Vault name is required.');
        } else {
            hideErrorMessage('txtKeyVault_Name_Multi');
        }
        if (region === '---Please Select---') {
            isValid = false;
            displayErrorMessage('RegionForKVault_Multi', 'Please select a Region.');
        } else {
            hideErrorMessage('RegionForKVault_Multi');
        }
        if (revValid(isValid)) {
            return false;
        }
        var mul_kv = '<tr><td>' + kv_name + '</td> <td> ' + res_gp + '</td> <td> ' + region + '</td> <td> ' + sku + '</td> <td> ' + retaintion + '</td> <td> <a class="btn btn-danger delete_tbl_res" >Delete</a> </td></tr>';
        $("#tbl_kv_mul").append(mul_kv);
        $("#div_kv_mul").css('display', 'block');
    });
    //adding NSG details
    $("#AddNewNetSecurityGrpService_Multi").on('click', function () {
        var nsg_name = $('#txtNSecurityGrp_Name_Multi').val();
        var res_gp = $('#selectAddNewRes_Group_multi :selected').text().trim();
        var region = $('#RegionForNSecurityGrp_Multi :selected').text();
        var nasgsubnet = $('#nsg_ass_subnet :selected').text();
        var isValid = true;
        if (res_gp === '---Please Select---') {
            isValid = false;
            displayErrorMessage('selectAddNewRes_Group_multi', 'Please select resource group.');
        } else {
            hideErrorMessage('selectAddNewRes_Group_multi');
        }
        if (nsg_name === '') {
            isValid = false;
            displayErrorMessage('txtNSecurityGrp_Name_Multi', 'Net Security name is required.');
        } else {
            hideErrorMessage('txtNSecurityGrp_Name_Multi');
        }
        if (region === '---Please Select---') {
            isValid = false;
            displayErrorMessage('RegionForNSecurityGrp_Multi', 'Please select a Region.');
        } else {
            hideErrorMessage('RegionForNSecurityGrp_Multi');
        }
        if (revValid(isValid)) {
            return false;
        }
        var mul_nsg = '<tr><td>' + nsg_name + '</td> <td> ' + res_gp + '</td> <td> ' + region + '</td><td>' + nasgsubnet + '</td> <td> <a class="btn btn-danger delete_tbl_res" >Delete</a> </td></tr>';
        $("#tbl_nsg_mul").append(mul_nsg);
        $("#div_nsg_mul").css('display', 'block');
    });
    //adding Storage Account details
    $("#AddNewStorageAccountService_Multi").on('click', function () {
        var sta_name = $('#txtSA_Name_Multi').val();
        var res_gp = $('#selectAddNewRes_Group_multi :selected').text().trim();
        var region = $('#RegionForStorageAccount_Multi :selected').text();
        var pricing_tier = $('#PriceTier_SAccount_Multi :selected').text();
        var Redundancy = $('#redundancyStr_Multi :selected').text();
        var isValid = true;
        if (res_gp === '---Please Select---') {
            isValid = false;
            displayErrorMessage('selectAddNewRes_Group_multi', 'Please select resource group.');
        } else {
            hideErrorMessage('selectAddNewRes_Group_multi');
        }
        if (sta_name === '') {
            isValid = false;
            displayErrorMessage('txtSA_Name_Multi', 'Storage Account name is required.');
        } else {
            hideErrorMessage('txtSA_Name_Multi');
        }
        if (region === '---Please Select---') {
            isValid = false;
            displayErrorMessage('RegionForStorageAccount_Multi', 'Please select a Region.');
        } else {
            hideErrorMessage('RegionForStorageAccount_Multi');
        }
        //if (pricing_tier === '---Please Select---') {
        //  isValid = false;
        //  displayErrorMessage('PriceTier_SAccount_Multi', 'Please select a Pricing Tier.');
        //} else {
        //  hideErrorMessage('PriceTier_SAccount_Multi');
        //}
        if (Redundancy === '---Please Select---') {
            isValid = false;
            displayErrorMessage('redundancyStr_Multi', 'Please select a Redundancy.');
        } else {
            hideErrorMessage('redundancyStr_Multi');
        }
        if (revValid(isValid)) {
            return false;
        }
        var mul_sta = '<tr><td>' + sta_name + '</td> <td> ' + res_gp + '</td> <td> ' + region + '</td> <td> ' + Redundancy + '</td> <td> ' + pricing_tier + '</td> <td> <a class="btn btn-danger delete_tbl_res" >Delete</a> </td></tr>';
        $("#tbl_sta_mul").append(mul_sta);
        $("#div_sta_mul").css('display', 'block');
    });
    //adding Azure Bastion details
    $("#AddNewAzureBastion_Multi").on('click', function () {
        var azb_name = $('#txtAzurebastion_Name_Multi').val();
        var res_gp = $('#selectAddNewRes_Group_multi :selected').text().trim();
        var pip = $('#PublicIP_AzureBastion_Multi').val();
        var region = $('#RegionForAzureBastion_Multi :selected').text();
        var vnet_name = $('#Vnet_AzureBastion_Multi :selected').text();
        var isValid = true;
        if (res_gp === '---Please Select---') {
            isValid = false;
            displayErrorMessage('selectAddNewRes_Group_multi', 'Please select resource group.');
        } else {
            hideErrorMessage('selectAddNewRes_Group_multi');
        }
        if (azb_name === '') {
            isValid = false;
            displayErrorMessage('txtAzurebastion_Name_Multi', 'Azure Bastion name is required.');
        } else {
            hideErrorMessage('txtAzurebastion_Name_Multi');
        }
        if (region === '---Please Select---') {
            isValid = false;
            displayErrorMessage('RegionForAzureBastion_Multi', 'Please select a Region.');
        } else {
            hideErrorMessage('RegionForAzureBastion_Multi');
        }
        if ($("#txtAzureBastion_Subnet_AddressSpace_Multi").val() === '') {
            isValid = false;
            displayErrorMessage('txtAzureBastion_Subnet_AddressSpace_Multi', 'Subnet Address Space is required.');
        } else {
            hideErrorMessage('txtAzureBastion_Subnet_AddressSpace_Multi');
        }
        if (pip === '') {
            isValid = false;
            displayErrorMessage('PublicIP_AzureBastion_Multi', 'Public IP Address name is required.');
        } else {
            hideErrorMessage('PublicIP_AzureBastion_Multi');
        }
        if (revValid(isValid)) {
            return false;
        }

        var mul_azb = '<tr><td>' + azb_name + '</td> <td> ' + res_gp + '</td> <td> ' + region + '</td> <td> ' + vnet_name + '</td> <td> ' + pip + '</td> <td> <a class="btn btn-danger delete_tbl_res" >Delete</a> </td></tr>';
        $("#tbl_azb_mul").append(mul_azb);
        $("#div_azb_mul").css('display', 'block');
    });
});
$('#selectAddNewRes_Group_multi').on('change', function () {
    subs_rg();
});

/* utilities functions */

function subs_rg() {
    var selectedValue = $('#selectAddNewRes_Group_multi').val();
    var name = $("#tbl_rg_mul tr:has(td):contains('" + selectedValue + "') td:eq(2)").text();
    $("#txt_subs_id").val(name);
}
function append_rg_dropdown() {
    $("#selectAddNewRes_Group_multi").empty();
    $('#tbl_rg_mul').find("tr").each(function () {
        var rgname = $(this).find("td:first").text();
        if (rgname != '') {
            var d = '<option value=' + rgname + ' selected>' + rgname + '</option>';
            $("#selectAddNewRes_Group_multi").append(d);
        }
    });
}
function empty_all_fields() {
    $(".empty_fields").each(function () {
        if ($(this).is("select")) {
            var id = this.id;
            $("#" + id).val($("#" + id + " option:first").val());
        }
        else if ($(this).is("input")) {
            $(this).val('');
        }
        else if ($(this).is("table")) {
            $(this).find('tbody').empty();
        }
    });
}


/* Scripts for deployment page */


function SubsDetails() {
    var subscriptionData = []
    $('#subsdetails tr').each(function () {
        var data = {
            SubscriptionName: $(this).find('td:eq(1)').text(),
            SubscriptionID: $(this).find('td:eq(2)').text(),
            ClientId: $(this).find('td:eq(3)').text(),
            ClientSecret: $(this).find('td:eq(4)').text(),
            TenantId: $(this).find('td:eq(6)').text(),
            SubscriptionType: $(this).find('td:eq(6)').text(),
            Environment: $(this).find('td:eq(7)').text(),

        };
        subscriptionData.push(data);
    });
    //var subscriptionDataList = JSON.stringify(subscriptionData);
    debugger;
    $.ajax({
        url: '/MultiSubscription/GetSubscriptionDetails',
        method: "POST",
        data: { subscriptionDataList: JSON.stringify(subscriptionData) },
        success: function (result) {
        }
    });
    //$.ajax({
    //  url: '/MultiSubscription/GetSubscriptionDetails',
    //  type: 'post',
    //  data: subscriptionDataList,
    //  //contenttype: 'application/json',
    //  success: function(response) {
    //    // handle success
    //    console.log(response);
    //  },
    //  error: function(error) {
    //    // handle error
    //    console.log(error);
    //  }
    //});
}
$('#multisubs_saveNext').on('click', function () {

    if ($("#landingZoneName").val() == '') {
        swal("Please enter LandingZone name.");
        return false;
    }
    if ($("input[name='Solutions']:checked").val() == undefined) {
        swal("Please select Migration Type.");
        return false;
    }
    $('.tab-content').hide();
    $('#multiSubs_deploye').show();
    var lzDiv = $(".tablink:has(a[href='#LZ'])");
    var deployeDiv = $(".tablink:has(a[href='#DeployCAFBasic'])");
    deployeDiv.addClass("active");
    lzDiv.removeClass("active");
    var parent_div = $('#multiSubs_deploye');
    var deploy_div = $('#deploye_div');
    $('#multiSubs_deploye, #deploye_div').empty();
    //$('#deploye_div').parent('div').css({"margin-left": "230px", "margin-right": "23px" });
    parent_div.append('<h4 class="form_heading" id="myModalLabelmul">Azure Deploy Questionnaire</h4>');

    var sourceTableIds = ["#tbl_rg_mul", "#tbl_vnet_mul", "#tbl_subnet_mul", "#tbl_lb_mul", "#tbl_la_mul", "#tbl_fw_mul", "#tbl_rt_mul", "#tbl_kv_mul", "#tbl_nsg_mul", "#tbl_sta_mul", "#tbl_azb_mul"];
    var destinationHeadingIds = ["#quesh_0", "#quesh_1", "#quesh_9", "#quesh_3", "#quesh_6", "#quesh_2", "#quesh_4", "#quesh_7", "#quesh_12", "#quesh_5", "#quesh_10"];

    $.each(sourceTableIds, function (index, sourceTableId) {
        var sourceTable = $(sourceTableId);
        var modifiedTable = sourceTable.clone().addClass("table-bordered table-striped subnet_dtls_tbl deploye").removeClass("table");
        var tblheading = $(destinationHeadingIds[index]).clone();
        var lastColumnIndex = modifiedTable.find("tr:first th").length - 1;
        modifiedTable.find("tr").each(function () {
            $(this).find("td, th").eq(lastColumnIndex).remove();
        });
        if ($(sourceTableId + " tbody tr").length != 0) {
            tblheading.removeClass();
            deploy_div.append(tblheading, modifiedTable);
            parent_div.append(deploy_div);
        }
    });
    $('#multiSubs_deploye').append($("#confirmscript"));
    $('#multiSubs_deploye').append($('<div></div>').append($('<button></button>').attr('id', 'saveButton').addClass('btn btn-primary').css("padding", "6px 49px").text('Save').click(SaveData)));

    //var divWithButton = $('<div><button id="multibtnSave" oncl class="btn btn-primary">Save</button></div>');
    //parent_div.append(divWithButton);
});
$(".tablink:has(a[href='#LZ'])").on('click', function () {

    if ($("input[type='radio'][name='SubscriptionM']:checked").val() === "multi") {
        $('.tab-content').show();
        $('#multiSubs_deploye').hide();
    }
});



function SaveData() {
    disableButton();
    var landingZoneName = $("#landingZoneName").val();
    var migrationType = $("input[name='Solutions']:checked").val();
    var lzid = isNaN(parseInt(getParam("EditId"))) ? 0 : parseInt(getParam("EditId"));

    var multiSubsModel = {
        SubscriptionDetails: [],
        MultiResourceGroups: [],
        MultiVirtualNetworks: [],
        MultiSubnets: [],
        MultiLoadBalancers: [],
        MultiLogAnalytics: [],
        MultiFirewalls: [],
        MultiRouteTables: [],
        MultiKeyVaults: [],
        MultiNSGs: [],
        MultiStorageAccounts: [],
        MultiAzureBastions: [],
        landingZoneName: landingZoneName,
        migrationType: migrationType,
        Id: lzid
    };

    var subscriptionData = []
    $('#subsdetails tr').each(function () {
        var data = {
            SubscriptionName: $(this).find('td:eq(1)').text(),
            SubscriptionID: $(this).find('td:eq(2)').text(),
            ClientId: $(this).find('td:eq(3)').text(),
            ClientSecret: $(this).find('td:eq(4)').text(),
            TenantId: $(this).find('td:eq(6)').text(),
            SubscriptionType: $(this).find('td:eq(6)').text(),
            Environment: $(this).find('td:eq(7)').text(),
        };
        subscriptionData.push(data);
    });
    multiSubsModel.SubscriptionDetails = subscriptionData;
    var mulRgdata = [];
    $('#tbl_rg_mul.deploye tbody tr').each(function () {
        var multiResourceGroup = {
            RgName: $(this).find('td:eq(0)').text().trim(),
            Region: $(this).find('td:eq(1)').text().trim(),
            SubscriptionName: $(this).find('td:eq(2)').text().trim()
        };
        mulRgdata.push(multiResourceGroup);
    });
    multiSubsModel.MultiResourceGroups = mulRgdata;
    var mulVnetdata = [];
    $("#tbl_vnet_mul.deploye tbody tr").each(function () {
        var vnet = {
            vnetName: $(this).find("td:nth-child(1)").text().trim(),
            RgName: $(this).find("td:nth-child(2)").text().trim(),
            region: $(this).find("td:nth-child(3)").text().trim(),
            addressSpace: $(this).find("td:nth-child(4)").text().trim()
        };
        mulVnetdata.push(vnet);
    });
    multiSubsModel.MultiVirtualNetworks = mulVnetdata;
    var mulSnetdata = [];
    $('#tbl_subnet_mul.deploye tbody tr').each(function () {
        mulSnetdata.push({
            SubnetName: $(this).find('td:nth-child(1)').text().trim(),
            VnetName: $(this).find('td:nth-child(2)').text().trim(),
            AddressSpace: $(this).find('td:nth-child(3)').text().trim()
        });
        //mulSnetdata.push(rowData);
    });
    multiSubsModel.MultiSubnets = mulSnetdata;
    var mulLBdata = [];
    $("#tbl_lb_mul.deploye tbody tr").each(function () {
        var row = $(this);
        var rowData = {
            LoadBalancerName: row.find("td:nth-child(1)").text().trim(),
            RgName: row.find("td:nth-child(2)").text().trim(),
            Region: row.find("td:nth-child(3)").text().trim(),
            Sku: row.find("td:nth-child(4)").text().trim(),
            Type: row.find("td:nth-child(5)").text().trim(),
            PipName: row.find("td:nth-child(6)").text().trim()
        };
        mulLBdata.push(rowData);
    });
    multiSubsModel.MultiLoadBalancers = mulLBdata;
    var mulLAdata = [];
    $("#tbl_la_mul.deploye tbody tr").each(function () {
        var row = $(this);
        var rowData = {
            LogAnalyticsName: row.find("td:nth-child(1)").text().trim(),
            RgName: row.find("td:nth-child(2)").text().trim(),
            Region: row.find("td:nth-child(3)").text().trim()
        };
        mulLAdata.push(rowData);
    });
    multiSubsModel.MultiLogAnalytics = mulLAdata;
    var mulFwdata = [];
    $("#tbl_fw_mul.deploye tbody tr").each(function () {
        var row = $(this);
        var rowData = {
            FirewallName: row.find("td:nth-child(1)").text().trim(),
            RgName: row.find("td:nth-child(2)").text().trim(),
            Region: row.find("td:nth-child(3)").text().trim(),
            SKU: row.find("td:nth-child(4)").text().trim(),
            VirtualNetwork: row.find("td:nth-child(5)").text().trim(),
            Pip: row.find("td:nth-child(6)").text().trim()
        };
        mulFwdata.push(rowData);
    });
    multiSubsModel.MultiFirewalls = mulFwdata;
    var mulRtdata = [];
    $("#tbl_rt_mul.deploye tbody tr").each(function () {
        var row = $(this);
        var rowData = {
            RouteTableName: row.find("td:nth-child(1)").text().trim(),
            RgName: row.find("td:nth-child(2)").text().trim(),
            Region: row.find("td:nth-child(3)").text().trim()
        };
        mulRtdata.push(rowData);
    });
    multiSubsModel.MultiRouteTables = mulRtdata;
    var mulKvdata = [];
    $("#tbl_kv_mul.deploye tbody tr").each(function () {
        var row = $(this);
        var rowData = {
            KeyVaultName: row.find("td:nth-child(1)").text().trim(),
            RgName: row.find("td:nth-child(2)").text().trim(),
            Region: row.find("td:nth-child(3)").text().trim(),
            PricingTier: row.find("td:nth-child(4)").text().trim(),
            DaysToRetain: row.find("td:nth-child(5)").text().trim()
        };
        mulKvdata.push(rowData);
    });
    multiSubsModel.MultiKeyVaults = mulKvdata;
    var mulNsgdata = [];
    $("#tbl_nsg_mul.deploye tbody tr").each(function () {
        var row = $(this);
        var rowData = {
            NSGName: row.find("td:nth-child(1)").text().trim(),
            RgName: row.find("td:nth-child(2)").text().trim(),
            Region: row.find("td:nth-child(3)").text().trim(),
            Subnet: row.find("td:nth-child(4)").text().trim()
        };
        mulNsgdata.push(rowData);
    });
    multiSubsModel.MultiNSGs = mulNsgdata;
    var mulStrAccdata = [];
    $("#tbl_sta_mul.deploye tbody tr").each(function () {
        var row = $(this);
        var rowData = {
            StorageAccountName: row.find("td:nth-child(1)").text().trim(),
            RgName: row.find("td:nth-child(2)").text().trim(),
            Region: row.find("td:nth-child(3)").text().trim(),
            Redundancy: row.find("td:nth-child(4)").text().trim(),
            PricingTier: row.find("td:nth-child(5)").text().trim()
        };
        mulStrAccdata.push(rowData);
    });
    multiSubsModel.MultiStorageAccounts = mulStrAccdata;
    var mulAzbdata = [];
    $("#tbl_azb_mul.deploye tbody tr").each(function () {
        var row = $(this);
        var rowData = {
            AzureBastionName: row.find("td:nth-child(1)").text().trim(),
            RgName: row.find("td:nth-child(2)").text().trim(),
            Region: row.find("td:nth-child(3)").text().trim(),
            VnetName: row.find("td:nth-child(4)").text().trim(),
            Pip: row.find("td:nth-child(5)").text().trim()
        };
        mulAzbdata.push(rowData);
    });
    multiSubsModel.MultiAzureBastions = mulAzbdata;

    $.ajax({
        type: 'POST',
        url: "/MultiSubscription/SaveMultiSubsModel",
        data: JSON.stringify(multiSubsModel),
        contentType: 'application/json',
        dataType: 'json',
        success: function (response) {
            if (response.success == true) {
                Confirmation();
                enableButton();
            }
        },
        error: function (xhr, status, error) {
            swal('Error while sending data: ' + error);
        }
    });

}
//modal show
//function GenerateTFScript(){
//    $.ajax({
//          url: '/MultiSubscription/GenerateTFScript',
//          type: 'GET',
//          dataType: 'json',
//          success: function(response) {
//            },
//          error: function(xhr, textStatus, errorThrown) {
//            }
//    });
//}

function GenerateTFScript() {
    debugger;
    return new Promise((resolve, reject) => {
        $.ajax({
            url: '/MultiSubscription/GenerateTFScript',
            type: 'GET',
            dataType: 'json',
            success: function (response) {
                // If the AJAX call is successful, resolve the Promise with the response
                resolve(response);
            },
            error: function (xhr, textStatus, errorThrown) {
                // If there's an error in the AJAX call, reject the Promise with the error message
                reject(textStatus);
            }
        });
    });
}
function Confirmation() {
    swal({
        title: "Data saved successfully.",
        icon: "success",
        buttons: {
            //cancel: "Cancel",
            confirm: {
                text: "OK",
                value: "ok"
            }
        }
    }).then(async (value) => {
        if (value === "ok") {
            try {
                const response = await GenerateTFScript();
                if (response === 1) {
                    $("#confirmscript").modal('show');
                }
            } catch (error) {
                // Handle the error here, if needed
                swal("Oops!", "Something went wrong!", "error");

            }
        }
    });
}

// function Confirmation() {
//    swal({
//        title: "Data saved successfully.",
//        icon: "success",
//        buttons: {
//            //cancel: "Cancel",
//            confirm: {
//                text: "OK",
//                value: "ok"
//            }
//        }
//    }).then((value) => {
//        if (value === "ok") {
//            GenerateTFScript();
//            $("#confirmscript").modal('show');
//        }
//    });
//}

$(document).ready(function () {
    $('#subscriptionname').on('change', function () {
        var subscriptionName = $(this).val();
        checkNameDuplicacy(subscriptionName);
    });
});
function checkNameDuplicacy(subscriptionName) {
    $.ajax({
        url: '/MultiSubscription/CheckDuplicacy',
        type: 'GET',
        data: { name: subscriptionName },
        success: function (result) {
            if (result === true) {
                swal('SubscriptionName already exists!!', '', 'warning');
                $('#subscriptionname').css('border-color', 'red');
                return false;
            } else {
                $('#subscriptionname').css('border-color', '');
            }
        },
        error: function (xhr, status, error) {
            console.log(error);
        }
    });
}

$(function () {
    var divIdsArray = [];
    $(".hideshowd").each(function () {
        var divId = $(this).parent().nextAll("div").first().attr("id");
        divIdsArray.push(divId);
    });
    divIdsArray.forEach(divId => $("#" + divId).toggle($("#" + divId).find("table tbody tr").length > 0));
});

function disableButton() {
    $("#saveButton").addClass("disabled").prop("disabled", true);
}
function enableButton() {
    $("#saveButton").removeClass("disabled").prop("disabled", false);
}

