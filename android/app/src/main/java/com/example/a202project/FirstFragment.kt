package com.example.a202project

import android.app.AlertDialog
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.EditText
import android.widget.Toast
import androidx.navigation.fragment.findNavController
import com.example.a202project.databinding.FragmentFirstBinding

/**
 * A simple [Fragment] subclass as the default destination in the navigation.
 */
class FirstFragment : Fragment() {

    private var _binding: FragmentFirstBinding? = null

    // This property is only valid between onCreateView and
    // onDestroyView.
    private val binding get() = _binding!!

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {

        _binding = FragmentFirstBinding.inflate(inflater, container, false)
        return binding.root

    }



    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        binding.enrollment.setOnClickListener {
            findNavController().navigate(R.id.action_FirstFragment_to_SecondFragment)
        }

        binding.membercheckin.setOnClickListener{
            showDialog("Checked In Successfully")
        }

        binding.membercheckout.setOnClickListener{
            showDialog("Checked Out Successfully")
        }
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }

    private fun showDialog(s: String ) {
        val builder = AlertDialog.Builder(context)
        builder.setTitle("Enter Member ID")

        // Set up the input
        val input = EditText(context)
        builder.setView(input)

        // Set up the button
        builder.setPositiveButton("OK") { _, _ ->
            val enteredText = input.text.toString()
            Toast.makeText(context, s,Toast.LENGTH_SHORT).show()

            // Do something with the entered text here
        }

        builder.setNegativeButton("Cancel") { dialog, _ -> dialog.cancel() }

        builder.show()
    }
}