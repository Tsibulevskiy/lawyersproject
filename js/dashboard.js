$(document).ready(function() {
    // troubleshooting an issue with bootstrap modal & select2  
    $.fn.modal.Constructor.prototype.enforceFocus = function() {};


    //sidebars scripts next
    $('.collapseButtonContainer').click(function() {
        if ($('.arrowOfCollapse').hasClass('rotate180')) {

            $('#collapseSidebar').click(function() {

                $('#sidebar').animate({
                    width: "210px",
                    opacity: "1",
                    easing: "swing",
                    duration: 1
                });

                $('.arrowOfCollapse').removeClass('rotate180');
                $('.menuItemName').show();
            });
        } else {
            $('#collapseSidebar').click(function() {

                $('#sidebar').animate({
                    width: "70px",
                    opacity: ".9",
                    easing: "swing",
                    duration: 1
                });

                $('.menuItemName').hide();
                $('.arrowOfCollapse').addClass('rotate180');

            });
        }
    });

    //second sidebar hide script next

    $('.sidebarItem').click(function() {
        $('.secondSidebar').animate({
            width: 'toggle',
            opacity: 0
        }, 500)
    });


    //select2() plugin init next

    $('.calendarSharingSelect, .settingsSelect, #selectGroupMembers').select2({
        width: '100%'
    });
    $('.billsSelectsLabels select').select2();
    $('.filtersSelect2').select2();
    $('.editEventSelects').select2();
    $('#inviteUserGroup').select2({
        placeholder: 'Select some groups',
        width: '100%'
    })
    $('#inviteUserPermission').select2({
        placeholder: 'Select user permission',
        width: '100%'
    })
    $('.remindersSelects').select2({
        width: '25%'
    });
    $('#findAmatter').select2({
        placeholder: 'Find a matter'
    });
    $('.filterInputWithCustomDropDown').select2();
    $('#mainSearchInput, .billsSelects, .quickTimeSelect').select2({
        width: '100%',
        margin: '0'
    });
    $('.firmUserFieldSelect2').select2({
        placeholder: 'Choose firm user'
    });
    $('#taskList').select2({});

    $('#findAmatter, #firmUserTimeEntry, #activityCategoryChoose').select2();
    $('#notificationRecipients, .BillableClientsSelect2').select2({
        width: '100%',
        placeholder: 'choose here'
    });
    // timekeeper input
    $(function() {
        var d = new Date(),
            h = d.getHours(),
            m = d.getMinutes();
        if (h < 10) h = '0' + h;
        if (m < 10) m = '0' + m;
        $('.timeSelectInput').each(function() {
            $(this).attr({ 'value': h + ':' + m });
        });
    });
    //fixed sibebars padding calc script next 

    let mainSideBarWidth = $('#sidebar').width();
    let secondSidebarWidth = $('.secondSidebar').width() + 48;
    let secondSidebarWidthMinus = $('.secondSidebar').width();
    let chatSidebarWidth = $('#chatContacts').width();
    let sidebarsWidth = mainSideBarWidth + secondSidebarWidth + 0;
    let chatSidebarsWidth = mainSideBarWidth + chatSidebarWidth + 0;
    let notANumber = isNaN(secondSidebarWidth);
    let notANumberChatSidebar = isNaN(chatSidebarsWidth);

    function whatSidebars() {

        if (notANumber === true) {
            $('.mainDashboardContainer').css('margin-left', mainSideBarWidth);
        } else {
            $('.secondSidebar').css('margin-left', mainSideBarWidth);
            $('.mainDashboardContainer').css('margin-left', sidebarsWidth);
        }
    }

    function whatSidebarsChat() {
        if (notANumberChatSidebar === true) {
            $('#chatMessage').css('margin-left', chatSidebarsWidth);
            $('#chatContacts, #chatMessages').css('margin-left', mainSideBarWidth);
        } else {
            $('#chatContacts').css('margin-left', mainSideBarWidth);
            $('#chatMessage').css('margin-left', chatSidebarsWidth);
            $('.chatMainContainer').css('margin-left', chatSidebarsWidth);
        }
    }

    setTimeout(whatSidebars, 0);
    setTimeout(whatSidebarsChat, 0);

    // select all checkbox script next

    $('#selectAllDocs').change(function() {
        let checkboxes = $('.selectAllClassCheckbox');

        $(checkboxes).prop("checked", !checkboxes.prop("checked"));
    });

    // for non-close dropdowns on any click

    $(document).on('click', '.dropdown-menu', function(e) {
        e.stopPropagation();
    });

    //matters page displaying columns script next
    // we need to do some shit with dat shit

    $('.columnShowCheckBoxLabel').click(function() {
        console.log('checkbox click')
        $('.columnShowCheckBoxLabel').each(function() {
            $(this).click(function() {

            });
        });
    });

    // chat dropdowns

    $('#chatMenuButton, #chatMenuDropdownOne>li').click(function() {
        $('#chatMenuDropdownOne').slideToggle('slow')
    });
    $('#clipButton, #chatMenuDropdownTwo>li').click(function() {
        $('#chatMenuDropdownTwo').slideToggle('slow')
    });
    $('.replyMessage').click(function() {
        let message = $(this).parents('.messageItem').find('.messageItemMessegeBottom').text()
            // console.log(message)
        $('.chatMainContainerBottomReplyingMessage').toggle();
        $('.replyingMessageText').text(message);
    });
    $('.undoReply').click(function() {
        $('.chatMainContainerBottomReplyingMessage').toggle();

    });
    $('.chatContactsListItemChooseForward').click(function() {
        $(this).toggleClass('forwardActive')
    });

    // uploading items to docs script next

    // rendering of modal

    $('#addReminderButton').click(function() {
        console.log('modal rendered')
        let reminderModal = $('<div class="modal fade sendInInvitation" id="addReminder" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"> <div class="modal-dialog modal-lg newModalStyle" role="document"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><i class="fas fa-times"></i></button> <h4 class="modal-title" id="myModalLabel">Add Reminder </h4> </div><div class="modal-body"> <div class="addReminderModal flex"> <div class="addReminderModalSub flex"> <div class="addReminderModalSubRow flex"> <h4>Reminder details</h4> </div><div class="addReminderModalSubRow flex"> <label for="reminderTitle"> <span>Reminder title</span> <input id="reminderTitle"></input> </label> </div><div class="addReminderModalSubRow flex"> <div class="addReminderModalSubRowCol flex"> <span>Start time</span> <div class="addReminderModalSubRowColRow flex"> <label for="" class="dateSelectInput icon"> <input type="text" class="inputCalendarOne"><i class="fas fa-calendar-alt"></i> </label> <label for="" class="timeSelectInput"> <input type="text" class="timepicker"><i class="far fa-clock"></i> </label> </div></div><div class="addReminderModalSubRowCol flex"> <span>End time</span> <div class="addReminderModalSubRowColRow flex"> <label for="" class="dateSelectInput icon"> <input type="text" class="inputCalendarTwo"><i class="fas fa-calendar-alt"></i> </label> <label for="" class="timeSelectInput"> <input type="text" class="timepicker"><i class="far fa-clock"></i> </label> </div></div></div><div class="addReminderModalSubRow flex"> <label for="reminderTitle"> <span>Location</span> <input type="text"></input> </label> </div><div class="addReminderModalSubRow flex"> <label for="reminderTitle"> <span>Matter</span> <select name="" class="select2ForReminder"> <option value="">#1</option> <option value="">#2</option> <option value="">#3</option> </select> </label> </div><span>Reminders</span> <span id="remondersContainer"> </span> <button id="addReminderRowButton">Add reminder</button> <div class="addReminderModalSubRow flex"> <label for="reminderTitle"> <span>Save to calendar:</span> <select name="" class="select2ForReminder"> <option value="">Main</option> <option value="">Office</option> <option value="">Departament</option> </select> </label> </div><div class="addReminderModalSubRow flex"> <label for=""> <span>Description</span> <textarea name=""></textarea> </label> </div></div><div class="addReminderModalSub flex"> <div class="addReminderModalSubRow flex"> <h4>Invite attendees</h4> </div><div class="addReminderModalSubRow flex"> <label for=""> <span>Find firm users or contacts to invite</span> <select name="" class="select2ForReminder" multiple> <option value="">John</option> <option value="">Sarah</option> <option value="">Vance</option> </select> </label> </div></div></div></div><div class="modal-footer newModalFooter flex"> <button type="submit" class="btn btn-default" data-dismiss="modal">Add reminder</button> <button type="submit" class="btn btn-primary" data-dismiss="modal">Cancel</button> </div></div></div></div>');


        //addning modal markup to DOM
        $('body').append(reminderModal);
        $('.timepicker').wickedpicker();
        //init select2 & pmuCalendar
        $('#taskList, .select2ForReminder').select2({
            width: '100%'
        });
        pickmeup('.inputCalendarOne', {
            position: 'bottom',
            format: 'Y-m-d',
            hide_on_select: true,
            class_name: 'calendarReminderModal'
        });
        pickmeup('.inputCalendarTwo', {
            position: 'bottom',
            format: 'Y-m-d',
            hide_on_select: true,
            class_name: 'calendarReminderModal'
        });

        //reminders script next

        $('#addReminderRowButton').click(function() {
            console.log('addReminderButton click')
            $('#remondersContainer').append(' <div class="addReminderModalSubRow addReminderModalSubRowReminders flex"> <select name="" id="" class="remindersSelects"></select> <input type="number"> <select name="" id=""> <option value="" selected>minutes</option> <option value="">hours</option> <option value="">days</option> </select> <span>before</span> <button class="removeReminderButton">remove</button> </div>');

            $('.removeReminderButton').click(function() {
                var removebleEl = $(this).parent();
                removebleEl.remove();
            });
        });

        $('#addReminder').on('hidden.bs.modal', function() {
            console.log('remove modal');
            $('body').find('#addReminder').remove();
            $('body').find('.calendarReminderModal').remove();
        });
    });

    //search dropdown script next


    $('#filterGlobalSearch').on("click", function() {
        $('#filterGlobalSearchContainer').slideToggle('slow');
    });

    $('#globalSearchInput').on("change, keyup", function() {
        let dropdown = $('#globalSearchInputDropDown');
        let searchInput = $('#globalSearchInput').val();
        console.log(searchInput);
        dropdown.show();

        if (searchInput == '') {
            $('.searchInputDropdownMainRow').text('search something!');
            dropdown.hide()

        } else {
            $('.searchInputDropdownMainRow').text('results for ' + searchInput);
            dropdown.show();
        }

        $('.searchInputDropdownRow').click(function() {
            let resultValue = $('.resultName', this).text();
            console.log(resultValue + ' resultValue value');
            $('#globalSearchInput').val(resultValue);
            dropdown.hide();
        });
    });
    //search dropdown filter script next
    $('.innerChekboxesParent').removeClass('openSuboption')
    $('#filterGlobalSearch').click(function() {
        let filterContainer = $('.filterGlobalSearchContainer');
        filterContainer.toggle();
    });
    $('.innerChekboxesParent').click(function() {
        $('.innerChekboxes', this).slideDown('slow');
    });

    $('#stateSelectAll').click(function() {
        let checkboxes = $('.stateOption');
        $(checkboxes).prop("checked", true);
    });

    $('#stateClearAll').click(function() {
        let checkboxes = $('.stateOption');
        $(checkboxes).prop("checked", false);

    });

    $('#federalSelectAll').click(function() {
        let checkboxes = $('.federalOption');
        $(checkboxes).prop("checked", true);
    });

    $('#federalClearAll').click(function() {
        let checkboxes = $('.federalOption');
        $(checkboxes).prop("checked", false);

    });
    $('#filterClose').click(function() {
        $('.filterGlobalSearchContainer').hide()
    });
    $('.filterandnarrowShowMore').click(function() {
        $(this).siblings('.filterAndNarrowLabel').removeClass('filterAndNarrowLabelHidden');
        $(this).hide();
    });

    $('.filterGlobalSearchContainer input[type="checkbox"]').click(function() {
        let checkboxName = $(this).next().text();
        let valueArray = [$(this).val()];

        valueArray.unshift(checkboxName);

        console.log(checkboxName);
        console.log(valueArray);

    });



    $.each(valueArray, function(key, value) {
        event.preventDefault();

        valueArray.unshift(checkboxName);
        $('#filterGlobalSearch').val(valueArray);
    });

    // console.log(checkboxName);
    // console.log(valueArray);



    //uploading new files script
    $('#uploadDoc').change(function() {

        let fileNames = this.files;
        console.log(fileNames + ' fileNames')
            // let fileNameItem = this.name

        $(fileNames).each(function() {
            let fileNameItem = this.name
            console.log(fileNameItem + ' fileNameItem')
            $('#uploadDocForm').append('<div class="uploadFilesModalContainerRow flex"> <div class="uploadFilesModalContainerRowSub flex"> <label for="" class="flex"> <span>Name</span> <input type="text" class="fileNameInput"> </label> <label for="" class="flex"> <span>Received Date</span> <input type="text"> </label> <label for="" class="flex"> <span>Matter</span> <select id="chooseMatterUploadDoc" type="text"></select> </label> <label for="" class="flex"> <span>Category</span> <select type="text" id="chooseCategoryUploadDoc"></select> </label> </div><div class="uploadFilesModalContainerRowSub flex"> <span class="deleteUploadingItem"> <i class="fas fa-times" ></i> </span> </div></div>');

            // $('.fileNameInput').val(fileNameItem)

            $('.fileNameInput').each(function() {
                $(this).val([fileNameItem]);
            })

        });

        $('.deleteUploadingItem').click(function() {
            $(this).parent().parent().remove();
        });
    });

    $('.colorChooseMenuItem').click(function() {
        let selectedColor = $(this).attr('class');
        console.log(selectedColor);
        $('#chooseColorMarker').removeClass().addClass(selectedColor);

        $('.colorChooseMenuItem').click(function() {
            $('#chooseColorDropdown').removeClass('open');
            console.log('hide color menu')
        })

        $('.colorChooseMenu').mouseleave(function() {
            $('#chooseColorDropdown').removeClass('open');
            console.log('hide color menu')
        });
    });
    $('.deleteAlert').click(function() {
        $('#deleteCalendarModal').modal('show')
    });
    //profile logo upload

    $('#uploadPhotoProfile').change(function(e) {
        let value = e.target.files[0].name;
        console.log(value)
        $('#uploadPhotoProfileSpan').text(value)
    });
    // push message script next (for example)

    $('#sendMessage, .pushMessageIco').click(function() {
        console.log(123)
        $('.pushMessage ').slideToggle('fast');
    });

    // second sidebar hide script

    $('#hideSecondSidebar').click(function() {
        $('.mainDashboardContainer').addClass('transition');
        if ($('.secondSidebar').hasClass('secondSidebarHidden')) {

            $('.secondSidebar').animate({ left: '0' }, {
                // duration: 500,
                complete: function() {
                    $('.secondSidebar').removeClass('secondSidebarHidden');
                    ////$('.secondSidebar').attr('style', 'margin-left: 210px;');
                    $('#hideSecondSidebar span').html('‹');
                }
            });
            $('.mainDashboardContainer').animate({ marginLeft: sidebarsWidth });





        } else {
            $('.secondSidebar').animate({ left: '-' + secondSidebarWidthMinus }, {
                // duration: 500,
                complete: function() {
                    $('.secondSidebar').toggleClass('secondSidebarHidden');
                    $('#hideSecondSidebar span').html('›');
                }
            });
            $('.mainDashboardContainer').animate({ marginLeft: secondSidebarWidth });
        }
    });
});
$('#editEventInfoContainer').click(function() {
    if ($('#calendarEventInfo').hasClass('notEditableMode')) {
        $('#calendarEventInfo').removeClass('notEditableMode');
        $('#editEvetInfoSave').show();
        $('#editEventInfoContainer').html('<span class="eventEditButtonText">Cancel editing</span>');
        var inputs = $('#calendarEventInfo').find('.editEventInfoControl');
        for (let i = 0; i < inputs.length; i++) {
            $(inputs[i]).removeAttr('disabled');
        }
    } else {
        $('#calendarEventInfo').addClass('notEditableMode');
        $('#editEvetInfoSave').hide();
        $('#editEventInfoContainer').html('<svg class="svg-inline--fa fa-pen fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="pen" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"></path></svg>');
        var inputs = $('#calendarEventInfo').find('.editEventInfoControl');
        for (let i = 0; i < inputs.length; i++) {
            $(inputs[i]).attr('disabled', 'true');
        }
    }

});
/*
$('#fas-next').click( function() {
    var date = new Date(  $('#timeKeeperDateChangeInput').val() );
    var D,M,Y;
    D = date.getDate() + 1;
    if(D < 10) {
        D = '0' + D;
    }
    M = date.getMonth() + 1;
    if(M < 10) {
        M = '0' + M;
    }
    Y = date.getFullYear(); 
    $('#timeKeeperDateChangeInput').attr('value', Y + "-" + M + "-" + D );
});
*/
$('#fas-next').click(function() {

    Date.prototype.addDays = function(days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    }

    var date = new Date($('#timeKeeperDateChangeInput').val());

    var newDate = date.addDays(1);

    var curr_date = newDate.getDate();

    if (curr_date < 10) {
        curr_date = '0' + curr_date;
    }

    var curr_month = newDate.getMonth() + 1;

    if (curr_month < 10) {
        curr_month = '0' + curr_month;
    }

    var curr_year = newDate.getFullYear();

    $('#timeKeeperDateChangeInput').attr('value', curr_year + "-" + curr_month + "-" + curr_date);

});

$('#fas-prev').click(function() {

    Date.prototype.addDays = function(days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() - days);
        return date;
    }

    var date = new Date($('#timeKeeperDateChangeInput').val());

    var newDate = date.addDays(1);

    var curr_date = newDate.getDate();

    if (curr_date < 10) {
        curr_date = '0' + curr_date;
    }

    var curr_month = newDate.getMonth() + 1;

    if (curr_month < 10) {
        curr_month = '0' + curr_month;
    }

    var curr_year = newDate.getFullYear();

    $('#timeKeeperDateChangeInput').attr('value', curr_year + "-" + curr_month + "-" + curr_date);

});