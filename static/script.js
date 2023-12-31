$(document).ready(function(){

    console.log('Ready')

    //  Fetch the current date and update it in the DOM
    let date = new Date()
    let current_date = date.toDateString()



    //  write an event, when Submit button is clicked
    $('').click(function(){

        //  get the text value from the textarea using the 'val()' method
        let text_value = $('').val()

        //  Convert it to JS object.
        //  Provide a 'key' here and in write the same in app.py file as well to extract data
        let input_text = {'' : text_value}
        console.log(input_text)

        //  ajax request
        function ajax_request(api_url , input_data){

            $.ajax({
    
                // type of request
                type : '',
    
                // url
                url : api_url,
    
                //  JSON data
                data : JSON.stringify(input_data),
    
                //  datatype of expected response
                dataType : 'json',
    
                //  content type
                contentType : 'application/json',
    
                //  success method
                success : function(result)
                {
                    //  extract the sentiment and emoji path
                    emotion = result.sentiment
                    emoji_url = result.path
    
                    //  update the emoticon and sentiment accordingly
                    if (product  ==  'Smartphone'){
                        $('#m_emoji').attr('src' , emoji_url)
                        $('#m_emotion').text(emotion)
                        $('#m_emoji').show()
                        $('#m_emotion').show()
                    }
    
                    else if (product  ==  'Digital Camera'){
                        $('#c_emoji').attr('src' , emoji_url)
                        $('#c_emotion').text(emotion)
                        $('#c_emoji').show()
                        $('#c_emotion').show()
                    }
    
                    else if (product  ==  'Headphones'){
                        $('#h_emoji').attr('src' , emoji_url)
                        $('#h_emotion').text(emotion)
                        $('#h_emoji').show()
                        $('#h_emotion').show()
                    }
    
                    else if (product  ==  'Video Games'){
                        $('#v_emoji').attr('src' , emoji_url)
                        $('#v_emotion').text(emotion)
                        $('#v_emoji').show()
                        $('#v_emotion').show()
                    }
                },
    

            //  if any error, run this function
            error : function(result){

                console.log(result)
            }
        })


        //  clearing the textbox after every button push
        $('#text').val("")
}})
        
})