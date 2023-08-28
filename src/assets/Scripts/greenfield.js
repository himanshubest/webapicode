
function naming(NamingValue) {
    if (NamingValue == "NamingConvention") {
        $("#PreandPost").show();
    }
    else if (NamingValue == "MicrosoftStandard") {
        $("#PreandPost").hide();
        $('#prefix, #postfix').val("");
    }
}
function showHideScheme(schemeToShow) {
    $(".scheme").not(schemeToShow).hide();
    $(schemeToShow).show();
}

function ComplianceScheme() {
    $("input[name='Compliance']").click(function () {
        $(".com-ns").hide();
        var selectedCompliance = $(this).val();
        $("#compliancepcirow").show();
        $(".compliance_scheme").hide();
        if (selectedCompliance === "PCI") {
            $("#compliencePCIdata").show();
            ComplianceNS();
        } else if (selectedCompliance === "HIPPA") {
            $("#complienceHippadata").show();
            ComplianceNS();
        } else if (selectedCompliance === "ISO 27001") {
            $("#complienceISOdata").show();
            ComplianceNS();
        } else if (selectedCompliance === "NIST") {
            $("#complienceNISTdata").show();
            ComplianceNS();
        }
    });
}
function HubSpokeClick() {
    $("input[name= 'cafenterprise_option']").click(function () {
        if ($(this).val() === 'Hub-Spoke') {
            $("#cafenterprisewan").show();
        }
        else {
            $("#cafenterprisewan").hide();
        }
    });
}
function CaF() {
    $("#selectCAFScheme").show();
    $("#selectCustomScheme, #selectComplianceScheme, #azurecisbenchmark").hide();
    $(".caf_scheme").click(function () {
        $(".basic-ns, .fod-ns, .ent-ns,.com-ns, .ais-ns, .entspoke-ns").hide();
        $(".basic-ns, .fod-ns, .ent-ns,.com-ns, .ais-ns, .entspoke-ns").find("td:eq(1) input").val("");
        var checkedval = $(this).val();
        $("#sharedResources,#selectnetsegment,#selectNamingConvention,#cafbasicdata,#caffoundationdata,#selectCAFEnterpriseScheme,#cafenterprisewan").hide();
        if (checkedval === "Basic") {
            $("#sharedResources,#selectnetsegment,#selectNamingConvention,#cafbasicdata").show();
        } else if (checkedval === "Foundation") {
            $("#sharedResources,#selectnetsegment,#selectNamingConvention,#caffoundationdata").show();
        } else if (checkedval === "Enterprise") {
            $("#sharedResources,#selectCAFEnterpriseScheme,#selectnetsegment,#selectNamingConvention").show();
            HubSpokeClick();
        }
    });
}
//main
$(".selectLZ").click(function () {
    var checkedval = $(this).val();
    $("#compliancepcirow, #sharedResources, #selectCAFScheme, #selectCustomScheme, #selectComplianceScheme, #sharedResourcescis, #azurecisbenchmark, #cafbasicdata, .compliance_scheme").hide();
    $(".basic-ns, .fod-ns, .ent-ns,.com-ns, .ais-ns, .entspoke-ns").hide();
    $(".basic-ns, .fod-ns, .ent-ns,.com-ns, .ais-ns, .entspoke-ns").find("td:eq(1) input").val("");
    if (checkedval === "CAF") {
        CaF();
        $(".compliance_scheme").hide();
    }
    else if (checkedval === "Custom") {
        $("#selectCustomScheme, #sharedResources,#selectNamingConvention").show();
        $("#selectCAFScheme, #sharedResourcescis, #selectComplianceScheme, #selectnetsegment, #azurecisbenchmark, #cafbasicdata").hide();
        $(".compliance_scheme").hide();
    }
    else if (checkedval === "Compliance") {
        $("#selectComplianceScheme,#sharedResources,#selectnetsegment,#selectNamingConvention").show();
        $("#selectCAFScheme,#sharedResourcescis, #selectCustomScheme, #azurecisbenchmark, #cafbasicdata").hide();
        ComplianceScheme();
    }
    else if (checkedval === "CISBenchmark") {
        $("#sharedResourcescis,#selectnetsegment,#selectNamingConvention, #azurecisbenchmark").show();
        $("#sharedResources, #selectCAFScheme, #selectCustomScheme, #selectComplianceScheme").hide();
        $(".compliance_scheme").hide();
    }
    else {

    }
});

function Compliance_default() {
    $('#PCI').prop('checked', false);
    $('#cafenterprisewan').hide();
    $('#selectCAFEnterpriseScheme').hide();
    $('#HIPPA').prop('checked', false);
    $('#ISO').prop('checked', false);
    $('#NIST').prop('checked', false);
    $('#chkprod').prop('checked', false);
    $('#chkVnet').prop('checked', false);
    $('#chkDev').prop('checked', false);
    $('#chkTest').prop('checked', false);
    $('#enterresname').prop('checked', false);
    $("#OrgNameForRG").val('');
    $("#newcompliance").on('click', function () {
        $('#RegionForRG option').prop('selected', function () {
            return this.defaultSelected;
        });
    });

    $("#PrefixNameForRG").val('');
    $("#azbenchmark").on('click', function () {
        $('#RegionForRGcis option').prop('selected', function () {
            return this.defaultSelected;
        });
    });
}
function EnterpriseNS() {
    $(".ent-ns").hide();
    $("#Entprowprod, #EntprowprodSpoke").toggle($("#chkprod").is(":checked"));
    $("#Entprowuat, #EntprowuatSpoke").toggle($("#chkVnet").is(":checked"));
    $("#Entprowdev, #EntprowdevSpoke").toggle($("#chkDev").is(":checked"));
    $("#Entprowtest,#EntprowtestSpoke").toggle($("#chkTest").is(":checked"));
    // Clear input fields when hiding the corresponding rows
    if (!$("#chkprod").is(":checked")) {
        $("#EntpvalueProdipaddress, #EntpvalueProdipaddressSpoke").val("");
    }
    if (!$("#chkVnet").is(":checked")) {
        $("#EntpvalueUATipaddress, #EntpvalueUATipaddressSpoke").val("");
    }
    if (!$("#chkDev").is(":checked")) {
        $("#EntpvalueDevipaddress, #EntpvalueDevipaddressSpoke").val("");
    }
    if (!$("#chkTest").is(":checked")) {
        $("EntpvalueTestipaddress, #EntpvalueTestipaddressSpoke").val("");
    }
}
function ComplianceNS() {
    $(".com-ns").hide();
    $("#comrowprod").toggle($("#chkprod").is(":checked"));
    $("#comrowuat").toggle($("#chkVnet").is(":checked"));
    $("#comrowdev").toggle($("#chkDev").is(":checked"));
    $("#comrowtest").toggle($("#chkTest").is(":checked"));
    if (!$("#chkprod").is(":checked")) {
        $("#comvalueProdipaddress").val("");
    }
    if (!$("#chkVnet").is(":checked")) {
        $("#comvalueUATipaddress").val("");
    }
    if (!$("#chkDev").is(":checked")) {
        $("#comvalueDevipaddress").val("");
    }
    if (!$("#chkTest").is(":checked")) {
        $("#comvalueTestipaddress").val("");
    }
}
function AisNS() {
    $(".ais-ns").hide();
    $("#aisrowprod").toggle($("#chkprod").is(":checked"));
    $("#aisrowuat").toggle($("#chkVnet").is(":checked"));
    $("#aisrowdev").toggle($("#chkDev").is(":checked"));
    $("#aisrowtest").toggle($("#chkTest").is(":checked"));
    if (!$("#chkprod").is(":checked")) {
        $("#aisvalueProdipaddress").val("");
    }
    if (!$("#chkVnet").is(":checked")) {
        $("#aisvalueUATipaddress").val("");
    }
    if (!$("#chkDev").is(":checked")) {
        $("#aisvalueDevipaddress").val("");
    }
    if (!$("#chkTest").is(":checked")) {
        $("#aisvalueTestipaddress").val("");
    }
}
function BasicNS() {
    $(".basic-nw").hide();
    $("#rowprod").toggle($("#chkprod").is(":checked"));
    $("#rowuat").toggle($("#chkVnet").is(":checked"));
    $("#rowdev").toggle($("#chkDev").is(":checked"));
    $("#rowtest").toggle($("#chkTest").is(":checked"));
    if (!$("#chkprod").is(":checked")) {
        $("#valueProdipaddress").val("");
    }
    if (!$("#chkVnet").is(":checked")) {
        $("#valueUATipaddress").val("");
    }
    if (!$("#chkDev").is(":checked")) {
        $("#valueDevipaddress").val("");
    }
    if (!$("#chkTest").is(":checked")) {
        $("#valueTestipaddress").val("");
    }
}
function FoundationNS() {
    $(".fod-ns").hide();
    var showProd = $("#chkprod").is(":checked");
    var showUAT = $("#chkVnet").is(":checked");
    var showDev = $("#chkDev").is(":checked");
    var showTest = $("#chkTest").is(":checked");
    $("#fodrowprod").toggle(showProd);
    $("#fodrowuat").toggle(showUAT);
    $("#fodrowdev").toggle(showDev);
    $("#fodrowtest").toggle(showTest);
    if (!showProd) {
        $("#fodvalueProdipaddress").val("");
    }
    if (!showUAT) {
        $("#fodvalueUATipaddress").val("");
    }
    if (!showDev) {
        $("#fodvalueDevipaddress").val("");
    }
    if (!showTest) {
        $("#fodvalueTestipaddress").val("");
    }
}

$(function () {
    //network segment
    $("#selectnetworksegZone input[type='checkbox']").on('click', function () {
        $(".basic-ns, .fod-ns, .ent-ns,.com-ns, .ais-ns, .entspoke-ns").hide();
        //$("#rowprod,#rowtest,#rowdev,#rowuat,#fodrowprod,#fodrowuat,#fodrowdev,#fodrowtest,#EntprowprodSpoke,#EntprowuatSpoke,#EntprowdevSpoke,#EntprowtestSpoke,#Entprowprod,#Entprowuat,#Entprowdev,#Entprowtest").find("td:eq(1) input").val("");
        var cafselected = $("#cafscheme input[type='radio']:checked").val();
        var lzselected = $("#selectLandingZone input[type='radio']:checked").val();
        if (lzselected == 'CAF') {
            if (cafselected == 'Basic') {
                BasicNS();
            } else if (cafselected == 'Foundation') {
                FoundationNS();
            } else if (cafselected == 'Enterprise') {
                EnterpriseNS();
            }
        }
        else if (lzselected == 'Compliance') {
            ComplianceNS()
        } else if (lzselected == 'CISBenchmark') {
            AisNS();
        }
    });

    $(".caf_scheme").on('click', function () {
        $('#chkprod, #chkVnet, #chkDev, #chkTest').prop('checked', false);
        $("#divBasicResources_CAF").modal('show');
        $("#cafbasicDetail").text("");
        $("#myimgbasic, #myimgfound, #myimgdiventer").css("display", "none");
        if (this.id == "basicresname") {
            $("#cafbasicDetail").append("<ul><li>Key Vault</li><li>Storage</li><li>Log Analytics Account</li><li>Vnet Landing Zone</li><li>Azure Migrate</li></ul>");
            $("#myimgbasic").css("display", "inline-block");
            $('#OrgNameForRG').val('');
            $('#RegionForRG option').prop('selected', function () {
                return this.defaultSelected;
            });
        } else if (this.id == "foundresname") {
            $("#cafbasicDetail").append("<ul><li>Key Vault</li><li>Storage</li><li>Log Analytics Account</li><li>Vnet Landing Zone</li><li>Azure Migrate</li><li>Network Watcher</li></ul>");
            $("#myimgfound").css("display", "inline-block");
            $('#OrgNameForRG').val('');
            $('#RegionForRG option').prop('selected', function () {
                return this.defaultSelected;
            });
        } else if (this.id == "enterresname") {
            $("#cafbasicDetail").append("<ul><li>Key Vault</li><li>Storage</li><li>Log Analytics Account</li><li>Vnet Landing Zone</li><li>Network Watcher</li><li>Route Table</li><li>NSG</li><li>Firewall</li><li>Load Balancer</li></ul>");
            $('input:radio[name="cafenterprise_option"]').attr('checked', false);
            $("#myimgdiventer").css("display", "inline-block");
            $('#OrgNameForRG').val('');
            //$('#EntpvalueprodSpoke, #EntpvalueProdipaddressSpoke, #EntpvalueUATSpoke, #EntpvalueUATipaddressSpoke, #EntpvalueDevSpoke, #cafenterprisewan, #EntpvalueDevipaddressSpoke, #EntpvalueTestSpoke, #EntpvalueTestipaddressSpoke').css("display", "none");
            $('#RegionForRG option').prop('selected', function () {
                return this.defaultSelected;
            });
        }
    });
    const ids = [
        "selectCAFScheme",
        "sharedResources",
        "sharedResourcescis",
        "selectCAFEnterpriseScheme",
        "selectnetsegment",
        "cusnwsegsubnetdiv",
        "selectNamingConvention",
        "selectComplianceScheme",
        "selectCustomScheme",
        "cafbasicdata",
        "caffoundationdata",
        "cafenterprisewan",
        "compliancepcirow",
        "compliencePCIdata",
        "complienceISOdata",
        "complienceNISTdata",
        "complienceHippadata",
        "azurecisbenchmark",
        "CAFEnterprise",
        "CAFBasic",
        "CAFFoundation"
    ];
    ids.forEach(function (id) {
        $("#" + id).css("display", "none");
        });
    });







    //For Custom Lz
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
    //$(function () {
        //script to collapse
        $(".hideshowd").click(function () {
            var divElement = $(this).parent().nextAll("div").first();
            divElement.toggle();
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
    $("#addNewResGroup_forCustom").on("click", function () {
        $("#divAddNewResourceGroup_Custom").modal("show");
        $("#divServiceNetworking_Custom").modal("hide");
        });
    //show the model for all the resources
    $(".addNewServices_Custom").on("click", function () {
        $("#VNetModelDetail_Custom, #RouteTableModelDetail_Custom, #FirewallModelDetail_Custom,#LoadBalancerModelDetail_Custom, #KeyVaultModelDetail_Custom, #NetSecurityGrpModelDetail_Custom, #StorageAccountModelDetail_Custom, #NetworkwatcherModelDetail_Custom, #AzureBastionModelDetail_Custom, #LogAnalyticsModelDetail_Custom").css("display", "none");
    debugger;
    switch (this.id) {
                case "addNewResGroup_Networking_Custom":
                    $("#divAddNewResourceGroup_Custom").modal("show");
                    $(".error-msg").remove();
                    break;
                case "addNewsubNet_Custom":
                    $("#divAddSubNet_Custom").modal("show");
                    $(".error-msg").remove();
                    break;
                case "addNewVNet_Custom":
                    $("#newServiceNetworking_Custom").text("Create a Virtual Network");
                    $("#divServiceNetworking_Custom").modal('show');
                    $("#VNetModelDetail_Custom").css("display", "block");
                    $(".error-msg").remove();
                    break;
                case "addNewLoadBalancer_Custom":
                    $("#newServiceNetworking_Custom").text("Create a Load Balancer");
                    $("#divServiceNetworking_Custom").modal('show');
                    $("#LoadBalancerModelDetail_Custom").css("display", "block");
                    $(".error-msg").remove();
                    break;
                case "addNewLogAnalytics_Custom":
                    $("#newServiceNetworking_Custom").text("Create a Log Analytics");
                    $("#divServiceNetworking_Custom").modal('show');
                    $("#LogAnalyticsModelDetail_Custom").css("display", "block");
                    $(".error-msg").remove();
                    break;
                case "addNewFirewall_Custom":
                    $("#newServiceNetworking_Custom").text("Create a Firewall");
                    $("#divServiceNetworking_Custom").modal('show');
                    $("#FirewallModelDetail_Custom").css("display", "block");
                    $(".error-msg").remove();
                    break;
                case "addNewRT_Custom":
                    $("#newServiceNetworking_Custom").text("Create a Route Table");
                    $("#divServiceNetworking_Custom").modal('show');
                    $("#RouteTableModelDetail_Custom").css("display", "block");
                    $(".error-msg").remove();
                    break;
                case "addNewKVault_Custom":
                    $("#newServiceNetworking_Custom").text("Create a Key Vault");
                    $("#divServiceNetworking_Custom").modal('show');
                    $("#KeyVaultModelDetail_Custom").css("display", "block");
                    $(".error-msg").remove();
                    break;
                case "addNewNetworkSecurityGroup_Custom":
                    $("#newServiceNetworking_Custom").text("Create a Network Security Group");
                    $("#divServiceNetworking_Custom").modal('show');
                    $("#NetSecurityGrpModelDetail_Custom").css("display", "block");
                    $(".error-msg").remove();
                    break;
                case "addNewStorageAccount_Custom":
                    $("#newServiceNetworking_Custom").text("Create a Storage Account");
                    $("#divServiceNetworking_Custom").modal('show');
                    $("#StorageAccountModelDetail_Custom").css("display", "block");
                    $(".error-msg").remove();
                    break;
                case "addNewAB_Custom":
                    $("#newServiceNetworking_Custom").text("Create a Azure Bastion");
                    $("#divServiceNetworking_Custom").modal('show');
                    $("#AzureBastionModelDetail_Custom").css("display", "block");
                    $(".error-msg").remove();
                    break;
            }
        });
    //Adding subscription lists
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
    //adding resourceGroup_Details group
    $("#addNewResGp_Custom").on('click', function () {
        var res_gp = $('#txtResGP_Name_Custom').val();
        var region = $('#RegionForAddNewRG_MultiS :selected').text();
        var isValid = true;

        if (subscriptionId === '0') {
            isValid = false;
            if ($("#rgsubs option").length == 1) {
                displayErrorMessage('rgsubs', "You don't have any subscription, Please provide first!");
            }
            else {
                displayErrorMessage('rgsubs', 'Please select Subscription.');
            }
        }
        else {
            hideErrorMessage('rgsubs');
        }
        if (res_gp.trim() === '') {
            isValid = false;
            displayErrorMessage('txtResGP_Name_MultiS', 'Resource Group is required.');
        }
        else {
            hideErrorMessage('txtResGP_Name_MultiS');
        }
        if (region === '---Please Select---') {
            isValid = false;
            displayErrorMessage('RegionForAddNewRG_MultiS', 'Please select a Region.');
        }
        else {
            hideErrorMessage('RegionForAddNewRG_MultiS');
        }
        if (revValid(isValid)) {
                    return false;
        }
        var mul_rg = '<tr><td>' + res_gp + '</td> <td> ' + region + '</td> <td> ' + subscriptionId + '</td> <td> <a class="btn btn-danger delete_tbl_res" >Delete</a> </td></tr>';
        $("#tbl_rg_mul").append(mul_rg);
        $("#div_rg_mul").css('display', 'block');
        var d = '<option value=' + res_gp + ' selected>' + res_gp + '</option>';
        $("#selectAddNewRes_Group_multi").append(d);
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
                var subnet_name = $(this).find("td").eq('1').text();
    var subnet_address = $(this).find("td").eq('2').text();
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
        swal("You do not have a subnet to delete."); //valid
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
    var data = '<tr id="divSubnet' + subnetCount + '"><td><input type="checkbox" name="record"></td><td id="txtSubnet_Name_Multi' + subnetCount + '">' + subnetname + '</td>' +
        '<td id="txtSubnet_AddressSpace_Custom' + subnetCount + '">' + subnetaddressrange + '</td></tr>';
    $("#addNewSubnetTable_multi").append(data);
    subnetCount++;
            }
    else {
        displayErrorMessage('txtSubnet_AddressRange_Multi', 'The subnet IP range does not match.');//valid
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
    var mul_nsg = '<tr><td>' + nsg_name + '</td> <td> ' + res_gp + '</td> <td> ' + region + '</td> <td> <a class="btn btn-danger delete_tbl_res" >Delete</a> </td></tr>';
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

    //});